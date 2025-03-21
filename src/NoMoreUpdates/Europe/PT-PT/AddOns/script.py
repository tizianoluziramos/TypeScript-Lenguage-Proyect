# Script criado por tizi (eu dah)
import sys
import subprocess

def main():
    comando = sys.argv[1] if len(sys.argv) > 1 else "Sem comando"
    
    if comando == "Sem comando":
        print("Nenhum comando foi fornecido")
        return
    if comando == "":
        print("Nenhum comando foi fornecido")
        return

    try:
        saida = subprocess.check_output(comando, shell=True, stderr=subprocess.STDOUT)
        print(saida.decode('utf-8', errors='ignore'))
    except subprocess.CalledProcessError as e:
        print(f"Erro ao executar o comando: {e.output.decode('utf-8', errors='ignore')}")

if __name__ == "__main__":
    main()
