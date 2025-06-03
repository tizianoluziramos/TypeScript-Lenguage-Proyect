# স্ক্রিপ্ট তৈরি করেছেন tizi (আমি dah)
import sys
import subprocess

def মূল():
    কমান্ড = sys.argv[1] if len(sys.argv) > 1 else "কোন কমান্ড নেই"
    
    if কমান্ড == "কোন কমান্ড নেই":
        print("কোনো কমান্ড দেওয়া হয়নি")
        return
    if কমান্ড == "":
        print("কোনো কমান্ড দেওয়া হয়নি")
        return

    try:
        আউটপুট = subprocess.check_output(কমান্ড, shell=True, stderr=subprocess.STDOUT)
        print(আউটপুট.decode('utf-8', errors='ignore'))
    except subprocess.CalledProcessError as e:
        print(f"কমান্ড চালাতে সমস্যা হয়েছে: {e.output.decode('utf-8', errors='ignore')}")

if __name__ == "__main__":
    মূল()
