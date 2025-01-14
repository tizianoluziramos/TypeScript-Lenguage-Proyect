# Script creado por tizi (yo dah)
import sys
import subprocess

def main():
    comando = sys.argv[1] if len(sys.argv) > 1 else "Sin comando"
    
    if comando == "Sin comando":
        print("No se dio ningún comando")
        return
    if comando == "":
        print("No se dio ningun comando")
        return

    try:
        salida = subprocess.check_output(comando, shell=True, stderr=subprocess.STDOUT)
        print(salida.decode('utf-8', errors='ignore'))
    except subprocess.CalledProcessError as e:
        print(f"Error al ejecutar el comando: {e.output.decode('utf-8', errors='ignore')}")

if __name__ == "__main__":
    main()