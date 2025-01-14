# Script créé par tizi (moi dah)
import sys
import subprocess

def principal():
    commande = sys.argv[1] if len(sys.argv) > 1 else "Aucune commande"
    
    if commande == "Aucune commande":
        print("Aucune commande donnée")
        return
    if commande == "":
        print("Aucune commande donnée")
        return

    try:
        sortie = subprocess.check_output(commande, shell=True, stderr=subprocess.STDOUT)
        print(sortie.decode('utf-8', errors='ignore'))
    except subprocess.CalledProcessError as e:
        print(f"Erreur lors de l'exécution de la commande : {e.output.decode('utf-8', errors='ignore')}")

if __name__ == "__main__":
    principal()
