"""Prepare responsive project previews; requires Pillow only for this utility."""
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parent.parent / "screenshots"
destination = root / "responsive"
destination.mkdir(exist_ok=True)
for source in sorted(root.glob("*.jpg")):
    with Image.open(source) as image:
        image = image.convert("RGB")
        for width in (480, 960):
            height = round(image.height * width / image.width)
            image.resize((width, height), Image.Resampling.LANCZOS).save(
                destination / f"{source.stem}-{width}.webp",
                "WEBP", quality=76, method=6,
            )
print("Responsive project previews updated.")
