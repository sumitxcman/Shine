from PIL import Image, ImageEnhance
import os

input_dir = r"C:\Users\pc\.gemini\antigravity\brain\05bb9e51-3966-4ce6-b181-fa2458f4a1f4\.user_uploaded"
output_dir = r"c:\Users\pc\Downloads\Blue Shine\public\images\real"
os.makedirs(output_dir, exist_ok=True)

def enhance_and_save(img, out_name, brightness=1.04, contrast=1.08, sharpness=1.15):
    if img.mode != 'RGB':
        img = img.convert('RGB')
    if brightness != 1.0:
        enhancer = ImageEnhance.Brightness(img)
        img = enhancer.enhance(brightness)
    if contrast != 1.0:
        enhancer = ImageEnhance.Contrast(img)
        img = enhancer.enhance(contrast)
    if sharpness != 1.0:
        enhancer = ImageEnhance.Sharpness(img)
        img = enhancer.enhance(sharpness)
    
    out_path = os.path.join(output_dir, out_name)
    img.save(out_path, "JPEG", quality=92, optimize=True)
    print(f"Processed: {out_name} -> {img.size}")

# 1. Real Front Signboard & Entrance (media_1790581444806.jpg)
img_front = Image.open(os.path.join(input_dir, "media_1790581444806.jpg"))
fw, fh = img_front.size
# Crop slight bottom obstruction if any to keep storefront super sharp and clean
crop_front = img_front.crop((0, 0, fw, int(fh * 0.88)))
enhance_and_save(crop_front, "blue-shine-storefront-hero.jpg", brightness=1.05, contrast=1.1, sharpness=1.2)
enhance_and_save(img_front, "blue-shine-storefront-full.jpg", brightness=1.03, contrast=1.08, sharpness=1.15)

# 2. Reception & Waiting Lounge (media_1790581435517.jpg)
img_waiting = Image.open(os.path.join(input_dir, "media_1790581435517.jpg"))
enhance_and_save(img_waiting, "clinic-waiting-lounge.jpg", brightness=1.05, contrast=1.08, sharpness=1.15)

print("Batch 3 processed successfully!")
