#!/usr/bin/env python3
"""產生尋卓護照的佔位圖卡、圖示與離線預快取清單。

正式卡名與圖片請直接替換 cards/*.json 和 images/，不要靠這個指令覆蓋。
執行本指令會覆寫佔位圖與 manifest。
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
FONT = "/usr/share/fonts/truetype/wqy/wqy-microhei.ttc"

# 張數來自實體套裝：價值卡為 65 張再加上 7 張附加卡。名稱是佔位，不是正式卡面文字。
SETS = [
    {"id": "association", "label": "聯想圖卡", "color": "#e0795b", "count": 96, "prefix": "聯想圖卡"},
    {"id": "values", "label": "價值卡", "color": "#d9a441", "count": 65, "prefix": "價值卡", "extra": 7},
    {"id": "careers", "label": "職業卡", "color": "#6aa56b", "count": 108, "prefix": "職業卡"},
    {"id": "disc", "label": "風格卡", "color": "#4f94b8", "count": 72, "prefix": "風格卡"},
    {"id": "strengths", "label": "優勢卡", "color": "#8a72b8", "count": 90, "prefix": "優勢卡"},
]


def xml(text: str) -> str:
    return text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def svg_card(label: str, number: str, color: str) -> str:
    size = 56 if len(number) >= 3 else 72
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="240" height="360" viewBox="0 0 240 360" role="img" aria-label="{xml(label)} {xml(number)}">
<rect width="240" height="360" rx="18" fill="{color}"/>
<rect x="14" y="14" width="212" height="332" rx="12" fill="none" stroke="#ffffff" stroke-opacity="0.9" stroke-width="3"/>
<text x="120" y="58" text-anchor="middle" fill="#ffffff" font-family="PingFang HK, Microsoft JhengHei, Noto Sans CJK TC, sans-serif" font-size="22">{xml(label)}</text>
<text x="120" y="188" text-anchor="middle" dominant-baseline="middle" fill="#ffffff" font-family="PingFang HK, Microsoft JhengHei, sans-serif" font-size="{size}" font-weight="700">{xml(number)}</text>
<text x="120" y="318" text-anchor="middle" fill="#ffffff" fill-opacity="0.92" font-family="PingFang HK, Microsoft JhengHei, sans-serif" font-size="16">佔位圖卡</text>
</svg>
'''


def write_set(spec: dict) -> int:
    set_id = spec["id"]
    img_dir = ROOT / "images" / set_id
    img_dir.mkdir(parents=True, exist_ok=True)
    cards = []
    for i in range(1, spec["count"] + 1):
        num = f"{i:02d}" if i < 100 else str(i)
        file_num = f"{i:03d}"
        image = f"images/{set_id}/{file_num}.svg"
        cards.append({
            "id": f"{set_id}-{file_num}",
            "number": i,
            "name": f"{spec['prefix']} {num}",
            "set": set_id,
            "image": image,
        })
        (ROOT / image).write_text(svg_card(spec["prefix"], num, spec["color"]), encoding="utf-8")
    extra = spec.get("extra", 0)
    for i in range(1, extra + 1):
        num = f"{i:02d}"
        file_num = f"x{i:02d}"
        image = f"images/{set_id}/{file_num}.svg"
        cards.append({
            "id": f"{set_id}-{file_num}",
            "number": i,
            "name": f"附加卡 {num}",
            "set": set_id,
            "image": image,
        })
        (ROOT / image).write_text(svg_card("附加卡", num, spec["color"]), encoding="utf-8")
    manifest = ROOT / "cards" / f"{set_id}.json"
    manifest.parent.mkdir(parents=True, exist_ok=True)
    manifest.write_text(json.dumps(cards, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return len(cards)


def make_icon(path: Path, size: int, maskable: bool = False) -> None:
    img = Image.new("RGB", (size, size), "#3d5a73")
    draw = ImageDraw.Draw(img)
    pad = int(size * (0.16 if maskable else 0.1))
    draw.rounded_rectangle(
        [pad, pad, size - pad - 1, size - pad - 1],
        radius=int(size * 0.2),
        fill="#f6f1e9",
    )
    font = ImageFont.truetype(FONT, int(size * (0.34 if maskable else 0.42)))
    text = "尋"
    box = draw.textbbox((0, 0), text, font=font)
    tw, th = box[2] - box[0], box[3] - box[1]
    x = (size - tw) / 2 - box[0]
    y = (size - th) / 2 - box[1] - size * 0.03
    draw.text((x, y), text, font=font, fill="#3d5a73")
    path.parent.mkdir(parents=True, exist_ok=True)
    img.save(path, "PNG")


def write_icons() -> None:
    icon_dir = ROOT / "icons"
    make_icon(icon_dir / "icon-192.png", 192)
    make_icon(icon_dir / "icon-512.png", 512)
    make_icon(icon_dir / "apple-touch-icon.png", 180)
    make_icon(icon_dir / "icon-maskable-512.png", 512, maskable=True)


def write_precache() -> None:
    skip_dirs = {".git", ".github", "scripts", "node_modules", "__pycache__", "_site"}
    allowed = {".html", ".css", ".js", ".json", ".svg", ".png", ".webmanifest", ".ico"}
    files = []
    for path in ROOT.rglob("*"):
        if not path.is_file():
            continue
        rel = path.relative_to(ROOT)
        if any(part in skip_dirs or part.startswith(".") for part in rel.parts):
            continue
        if path.suffix.lower() not in allowed:
            continue
        if path.name == "precache.json":
            continue
        files.append(rel.as_posix())
    files.append("precache.json")
    files = sorted(set(files))
    (ROOT / "precache.json").write_text(json.dumps(files, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"precache {len(files)} files")


def generate_all() -> None:
    total = 0
    for spec in SETS:
        count = write_set(spec)
        total += count
        print(f"{spec['id']}: {count}")
    write_icons()
    print(f"cards total: {total}")


if __name__ == "__main__":
    if "--precache-only" not in sys.argv:
        generate_all()
    write_precache()
