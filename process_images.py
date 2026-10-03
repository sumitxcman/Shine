from PIL import Image, ImageEnhance, ImageFilter
import os

input_dir = r"C:\Users\pc\.gemini\antigravity\brain\05bb9e51-3966-4ce6-b181-fa2458f4a1f4\.user_uploaded"
output_dir = r"c:\Users\pc\Downloads\Blue Shine\public\images\real"
os.makedirs(output_dir, exist_ok=True)

def enhance_and_save(img, out_path, brightness=1.05, contrast=1.1, sharpness=1.15):
    # Convert RGBA or other formats to RGB
    if img.mode != 'RGB':
        img = img.convert('RGB')
    
    # Mild enhancement for crystal clean clinic aesthetic
    if brightness != 1.0:
        enhancer = ImageEnhance.Brightness(img)
        img = enhancer.enhance(brightness)
    if contrast != 1.0:
        enhancer = ImageEnhance.Contrast(img)
        img = enhancer.enhance(contrast)
    if sharpness != 1.0:
        enhancer = ImageEnhance.Sharpness(img)
        img = enhancer.enhance(sharpness)
        
    img.save(out_path, "JPEG", quality=92, optimize=True)
    print(f"Saved: {out_path} ({img.size})")

# 1. Doctor Pravesh with Child Patient in Operatory
img_doc = Image.open(os.path.join(input_dir, "media_1790581123190.jpg"))
enhance_and_save(img_doc, os.path.join(output_dir, "dr-pravesh-operatory.jpg"), brightness=1.04, contrast=1.08, sharpness=1.12)

# Doctor portrait crop focused on Dr. Pravesh (upper half)
w, h = img_doc.size
# Doctor Pravesh is in the middle-left of the photo
crop_dr_box = (int(w * 0.28), int(h * 0.35), int(w * 0.65), int(h * 0.62))
crop_dr = img_doc.crop(crop_dr_box)
enhance_and_save(crop_dr, os.path.join(output_dir, "dr-pravesh-portrait.jpg"), brightness=1.06, contrast=1.1, sharpness=1.2)

# 2. Pediatric Child Dental Chair with fun animated cartoon wall
img_pediatric = Image.open(os.path.join(input_dir, "media_1790581139985.jpg"))
enhance_and_save(img_pediatric, os.path.join(output_dir, "pediatric-dental-chair.jpg"), brightness=1.04, contrast=1.1, sharpness=1.12)

# 3. Modern Operatory Dental Chair (Wide clean view)
img_chair = Image.open(os.path.join(input_dir, "media_1790581149050.jpg"))
# Crop slight floor clutter at bottom to make it neat and focused
cw, ch = img_chair.size
img_chair_clean = img_chair.crop((0, 0, cw, int(ch * 0.88)))
enhance_and_save(img_chair_clean, os.path.join(output_dir, "clinic-operatory-chair.jpg"), brightness=1.05, contrast=1.08, sharpness=1.12)

# 4. Equipment Detail and Setup
img_equip = Image.open(os.path.join(input_dir, "media_1790581160976.jpg"))
enhance_and_save(img_equip, os.path.join(output_dir, "dental-equipment-detail.jpg"), brightness=1.04, contrast=1.1, sharpness=1.15)

print("All real clinic photographs successfully enhanced and saved!")
