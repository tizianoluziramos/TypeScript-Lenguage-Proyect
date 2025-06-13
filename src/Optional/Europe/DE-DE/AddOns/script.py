# Skript erstellt von tizi (ich dah)
import sys
import subprocess

def main():
    kommando = sys.argv[1] if len(sys.argv) > 1 else "Kein Kommando"
    
    if kommando == "Kein Kommando":
        print("Kein Kommando angegeben")
        return
    if kommando == "":
        print("Kein Kommando angegeben")
        return

    try:
        ausgabe = subprocess.check_output(kommando, shell=True, stderr=subprocess.STDOUT)
        print(ausgabe.decode('utf-8', errors='ignore'))
    except subprocess.CalledProcessError as e:
        print(f"Fehler beim Ausführen des Kommandos: {e.output.decode('utf-8', errors='ignore')}")

if __name__ == "__main__":
    main()
