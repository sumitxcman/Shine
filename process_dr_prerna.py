from PIL import Image, ImageEnhance
import os

input_path = r"C:\Users\pc\.gemini\antigravity\brain\05bb9e51-3966-4ce6-b181-fa2458f4a1f4\.user_uploaded\media_1790581716289.jpg"
output_dir = r"c:\Users\pc\Downloads\Blue Shine\public\images\real"
os.makedirs(output_dir, exist_ok=True)

img = Image.open(input_path)
if img.mode != 'RGB':
    img = img.convert('RGB')

w, h = img.size
# Crop focused professional portrait on Dr. Prerna's face and smiling upper profile
# Face is located in upper-middle area
crop_box = (int(w * 0.22), int(h * 0.18), int(w * 0.68), int(h * 0.52))
portrait = img.crop(crop_box)

# Enhance for clean, professional look
enhancer_b = ImageEnhance.Brightness(portrait)
portrait = enhancer_b.enhance(1.05)
enhancer_c = ImageEnhance.Contrast(portrait)
portrait = enhancer_c.enhance(1.08)
enhancer_s = ImageEnhance.Sharpness(portrait)
portrait = enhancer_s.enhance(1.2)

out_path = os.path.join(output_dir, "dr-prerna-portrait.jpg")
portrait.save(out_path, "JPEG", quality=95, optimize=True)

# Also save full photo if needed
full_out = os.path.join(output_dir, "dr-prerna-full.jpg")
img.save(full_out, "JPEG", quality=90, optimize=True)

print(f"Dr. Prerna portrait successfully created! Size: {portrait.size}")
