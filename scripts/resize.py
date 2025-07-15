import os
from PIL import Image
PHOTO_DIR_NAME = 'shindig'
PHOTO_NEW_NAME = 'shindig'
start_dir = os.path.join('in', PHOTO_DIR_NAME)
end_dir = os.path.join('out', PHOTO_DIR_NAME)

# Create output directory if it doesn't exist
os.makedirs(end_dir, exist_ok=True)

i = 0

# Process images in the big directory
for filename in os.listdir(start_dir):
    if filename.lower().endswith(('.jpg', '.jpeg', '.png', '.bmp', '.tiff')):
        input_path = os.path.join(start_dir, filename)
        
        # Open and get image dimensions
        with Image.open(input_path) as img:
            width, height = img.size
            
            # Check if image matches expected dimensions
                # Determine new size based on orientation
            if width > height:  # Landscape
                new_width = 1200
                new_height = int((height * new_width) / width)
            else:  # Portrait
                new_height = 1200
                new_width = int((width * new_height) / height)

            new_size = (new_width, new_height)
            
            # Use high-quality resampling
            resized_img = img.resize(new_size, Image.Resampling.LANCZOS)
            
            # Apply sharpening filter to counteract softening from resize
            from PIL import ImageFilter
            resized_img = resized_img.filter(ImageFilter.UnsharpMask(
                radius=0.5,      # Small radius for subtle effect
                percent=50,      # Moderate sharpening
                threshold=0      # Apply to all pixels
            ))
            
            # Create new filename
            name, _ = os.path.splitext(filename)
            new_filename = f"{PHOTO_NEW_NAME}-{'-'.join(name.split('-')[1:] if len(name.split('-')) > 1 else [f"{i}"])}-small.jpg"
            i += 1
            output_path = os.path.join(end_dir, new_filename)

            # Save with high quality settings as WEBP
            resized_img.save(output_path, 'JPEG', 
                             quality=95)      # High quality
            print(f"Processed: {filename} -> {new_filename}")

print("Image processing complete!")
