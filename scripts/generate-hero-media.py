"""Regenerate the SHREDX M20 hero poster and looping concept video.

Draws the dummy machine illustration programmatically in the site palette
(#14171A / #1F2428 / #3A424A / #F2F4F5 / #9AA5AE / #FF6A1A / #FFC21A) and
encodes a short H.264 loop with the ffmpeg binary bundled by imageio-ffmpeg.

The machine is drawn on a square scene layer which is scaled to fill the
frame height and centered horizontally on a wide cinematic background.

Usage:  python scripts/generate-hero-media.py
Output: public/images/m20-hero-poster.png
        public/images/m20-hero-loop.mp4
"""

import math
import os
import subprocess
import sys

import imageio_ffmpeg
from PIL import Image, ImageDraw, ImageFilter, ImageFont

# Canvas -------------------------------------------------------------------
W, H = 1920, 1080           # output frame (logical px)
SCENE = 1200                # machine scene logical size (square)
SS = 2                      # supersample factor for antialiasing
CW, CH = W * SS, H * SS
CS = SCENE * SS
FPS = 24
DURATION = 4.0
FRAMES = int(FPS * DURATION)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, "public", "images")
POSTER = os.path.join(OUT_DIR, "m20-hero-poster.png")
VIDEO = os.path.join(OUT_DIR, "m20-hero-loop.mp4")

# Palette ------------------------------------------------------------------
BG_TOP = (255, 255, 255)    # #FFFFFF
BG_BOT = (233, 237, 240)    # #E9EDF0 (studio falloff)
SURFACE = (43, 54, 64)      # #2B3640 (machine body)
PANEL = (30, 42, 54)        # #1E2A36 (darkest)
STAND = (52, 66, 78)        # #34424E
BORDER = (80, 97, 112)      # #506170
STEEL_HI = (195, 202, 208)  # light cutter steel
STEEL_MID = (139, 151, 161) # mid steel
ORANGE = (242, 92, 5)       # #F25C05
AMBER = (255, 194, 26)      # #FFC21A
FG = (243, 245, 247)        # #F3F5F7 (light text on dark machine)
MUTED = (95, 108, 120)      # #5F6C78
ACCENT_TEXT = (217, 79, 0)  # #D94F00


def S(v):
    return int(v * SS)


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def vertical_gradient(w, h, top, bottom):
    img = Image.new("RGB", (w, h))
    d = ImageDraw.Draw(img)
    for y in range(h):
        d.line([(0, y), (w, y)], fill=lerp(top, bottom, y / (h - 1)))
    return img


def rotor_points(cx, cy, r_out, r_in, teeth, angle):
    pts = []
    steps = teeth * 2
    for i in range(steps):
        r = r_out if i % 2 == 0 else r_in
        a = angle + (math.pi / teeth) * i
        pts.append((cx + r * math.cos(a), cy + r * math.sin(a)))
    return pts


def load_font(size, bold=True):
    candidates = [
        r"C:\Windows\Fonts\arialbd.ttf" if bold else r"C:\Windows\Fonts\arial.ttf",
        r"C:\Windows\Fonts\arial.ttf",
    ]
    for path in candidates:
        try:
            return ImageFont.truetype(path, S(size))
        except OSError:
            continue
    return ImageFont.load_default()


def build_background():
    """Wide cinematic backdrop: gradient, faint grid, corner labels."""
    img = vertical_gradient(CW, CH, BG_TOP, BG_BOT).convert("RGBA")

    grid = Image.new("RGBA", (CW, CH), (0, 0, 0, 0))
    gd = ImageDraw.Draw(grid)
    for x in range(0, CW, S(64)):
        gd.line([(x, 0), (x, CH)], fill=(30, 42, 54, 10))
    for y in range(0, CH, S(64)):
        gd.line([(0, y), (CW, y)], fill=(30, 42, 54, 10))
    img = Image.alpha_composite(img, grid)

    d = ImageDraw.Draw(img)
    d.text((S(48), S(56)), "SHREDX / M20", font=load_font(15), fill=MUTED)
    d.text((S(1872), S(1004)), "LOW SPEED / HIGH TORQUE",
           font=load_font(14), fill=ACCENT_TEXT, anchor="ra")
    return img


def build_machine():
    """Static machine layer (transparent, scene-space coordinates)."""
    img = Image.new("RGBA", (CS, CS), (0, 0, 0, 0))

    # soft shadow under machine
    shadow = Image.new("RGBA", (CS, CS), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    sd.ellipse([S(180), S(940), S(1020), S(1040)], fill=(30, 42, 54, 90))
    shadow = shadow.filter(ImageFilter.GaussianBlur(S(28)))
    img = Image.alpha_composite(img, shadow)

    d = ImageDraw.Draw(img)

    # hopper (trapezoid, steel) + dark throat
    d.polygon([(S(330), S(140)), (S(870), S(140)), (S(950), S(400)), (S(250), S(400))],
              fill=STEEL_MID, outline=PANEL, width=S(4))
    d.polygon([(S(390), S(190)), (S(810), S(190)), (S(858), S(346)), (S(342), S(346))],
              fill=PANEL)

    # cutting chamber shell + window (rotors drawn per-frame inside)
    d.rounded_rectangle([S(230), S(394), S(970), S(636)], radius=S(14),
                        fill=SURFACE, outline=BORDER, width=S(5))
    d.rounded_rectangle([S(282), S(442), S(746), S(594)], radius=S(8),
                        fill=PANEL, outline=BORDER, width=S(3))

    # drive unit (accent block on the right of the chamber)
    d.rounded_rectangle([S(766), S(452), S(950), S(582)], radius=S(14),
                        fill=ORANGE)
    d.ellipse([S(792), S(486), S(836), S(530)], fill=PANEL, outline=AMBER, width=S(4))

    # base / stand + legs
    d.polygon([(S(270), S(636)), (S(930), S(636)), (S(880), S(880)), (S(320), S(880))],
              fill=SURFACE, outline=BORDER, width=S(5))
    d.polygon([(S(340), S(880)), (S(312), S(980)), (S(372), S(980)), (S(408), S(880))],
              fill=STAND, outline=BORDER, width=S(4))
    d.polygon([(S(792), S(880)), (S(828), S(980)), (S(888), S(980)), (S(860), S(880))],
              fill=STAND, outline=BORDER, width=S(4))

    # nameplate
    d.rounded_rectangle([S(400), S(700), S(760), S(806)], radius=S(4),
                        fill=PANEL, outline=BORDER, width=S(3))
    d.line([(S(428), S(772)), (S(732), S(772))], fill=ORANGE, width=S(4))
    d.text((S(428), S(716)), "SHREDX", font=load_font(30), fill=FG)
    d.text((S(428), S(752)), "M20 / TWIN SHAFT", font=load_font(15), fill=STEEL_MID)
    return img


def make_glow(alpha):
    """Full-canvas radial orange glow, centered behind the machine."""
    # oversized mask so the layer bounds sit fully off-canvas — no visible seam
    mask = Image.radial_gradient("L").resize((S(2400), S(2400)))
    mask = mask.point(lambda v: int((255 - v) * alpha / 255))
    layer = Image.new("RGBA", mask.size, ORANGE + (255,))
    layer.putalpha(mask)
    glow = Image.new("RGBA", (CW, CH), (0, 0, 0, 0))
    # center the glow on the machine chamber (canvas space)
    glow.alpha_composite(layer, (S(960) - mask.size[0] // 2, S(540) - mask.size[1] // 2))
    return glow


# debris particles falling into the hopper — deterministic loop positions
PARTICLES = [
    (470, 40, 0.00, 0.9),
    (560, 40, 0.33, 1.1),
    (640, 40, 0.62, 0.8),
    (520, 40, 0.80, 1.2),
]
PARTICLE_SPAN = 200  # px traveled above hopper lip


def draw_frame(bg, machine, t):
    layer = machine.copy()
    d = ImageDraw.Draw(layer)

    # counter-rotating cutters (1 and -1 turns per loop → seamless)
    turns = 2 * math.pi * t
    teeth, r_out, r_in = 9, 86, 62
    centers = [(418, 518), (610, 518)]
    for i, (cx, cy) in enumerate(centers):
        ang = turns if i == 0 else -turns + math.pi / teeth
        d.polygon(rotor_points(S(cx), S(cy), S(r_out), S(r_in), teeth, ang),
                  fill=STEEL_HI, outline=PANEL)
        d.ellipse([S(cx - 26), S(cy - 26), S(cx + 26), S(cy + 26)],
                  fill=PANEL, outline=ORANGE, width=S(6))

    # falling debris above the hopper
    for x, w_, phase, speed in PARTICLES:
        y = 60 + ((t * speed + phase) % 1.0) * PARTICLE_SPAN
        d.rectangle([S(x), S(y), S(x + w_ * 0.28), S(y + w_ * 0.28)],
                    fill=lerp(MUTED, ORANGE, phase))

    # amber status bar sweeping under the nameplate line
    sweep = 428 + (t % 1.0) * 260
    d.line([(S(428), S(790)), (S(min(sweep, 732)), S(790))], fill=AMBER, width=S(3))

    # wide background → pulsing ambient glow → centered machine layer
    pulse = 34 + 18 * math.sin(2 * math.pi * t)
    frame = Image.alpha_composite(bg, make_glow(pulse))
    scaled = layer.resize((CH, CH), Image.LANCZOS)
    frame.alpha_composite(scaled, ((CW - CH) // 2, 0))
    return frame.convert("RGB").resize((W, H), Image.LANCZOS)


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    bg = build_background()
    machine = build_machine()

    ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
    cmd = [
        ffmpeg, "-y",
        "-f", "rawvideo", "-pix_fmt", "rgb24",
        "-s", f"{W}x{H}", "-r", str(FPS),
        "-i", "-",
        "-an", "-c:v", "libx264", "-pix_fmt", "yuv420p",
        "-crf", "33", "-preset", "slow", "-movflags", "+faststart",
        VIDEO,
    ]
    proc = subprocess.Popen(cmd, stdin=subprocess.PIPE,
                            stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    assert proc.stdin is not None
    for i in range(FRAMES):
        frame = draw_frame(bg, machine, i / FRAMES)
        if i == 0:
            frame.save(POSTER, optimize=True)
        proc.stdin.write(frame.tobytes())
    proc.stdin.close()
    code = proc.wait()
    if code != 0:
        sys.exit(f"ffmpeg exited with code {code}")
    print(f"wrote {POSTER}")
    print(f"wrote {VIDEO}")


if __name__ == "__main__":
    main()
