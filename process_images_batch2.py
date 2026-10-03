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

# 1. Real Storefront / Clinic Building Entrance
img_storefront = Image.open(os.path.join(input_dir, "media_1790581293488.jpg"))
# Crop slight edge car to make storefront stand out clean & prominent
sw, sh = img_storefront.size
crop_storefront = img_storefront.crop((int(sw * 0.05), int(sh * 0.28), sw, int(sh * 0.82)))
enhance_and_save(crop_storefront, "clinic-storefront.jpg", brightness=1.05, contrast=1.1, sharpness=1.2)
enhance_and_save(img_storefront, "clinic-building-full.jpg", brightness=1.03, contrast=1.08, sharpness=1.15)

# 2. Before & After Cases
# Case 1: Chipped / Broken front tooth restoration
img_ba1 = Image.open(os.path.join(input_dir, "media_1790581283857.jpg"))
enhance_and_save(img_ba1, "case-tooth-restoration-before-after.jpg", brightness=1.04, contrast=1.12, sharpness=1.2)

# Case 2: Teeth alignment / orthodontic bite correction
img_ba2 = Image.open(os.path.join(input_dir, "media_1790581310728.jpg"))
enhance_and_save(img_ba2, "case-teeth-alignment-before-after.jpg", brightness=1.04, contrast=1.12, sharpness=1.2)

# 3. Clinic Glass Door Corridor / Operatory Passage
img_corridor = Image.open(os.path.join(input_dir, "media_1790581264367.jpg"))
enhance_and_save(img_corridor, "clinic-operatory-corridor.jpg", brightness=1.06, contrast=1.08, sharpness=1.15)

# 4. Doctor in Treatment Session (Child patient with dental team)
img_treat = Image.open(os.path.join(input_dir, "media_1790581360438.jpg"))
enhance_and_save(img_treat, "dr-treatment-session.jpg", brightness=1.05, contrast=1.1, sharpness=1.15)

# 5. Full Dental Operatory Room with 'You are never fully dressed without a Smile'
img_room = Image.open(os.path.join(input_dir, "media_1790581387147.jpg"))
enhance_and_save(img_room, "clinic-dental-suite.jpg", brightness=1.04, contrast=1.08, sharpness=1.15)

# 6. Adult patient clinical procedure with doctor and team
img_adult = Image.open(os.path.join(input_dir, "media_1790581399585.jpg"))
enhance_and_save(img_adult, "clinical-treatment-adult.jpg", brightness=1.05, contrast=1.08, sharpness=1.15)

print("Batch 2 processing finished!")
