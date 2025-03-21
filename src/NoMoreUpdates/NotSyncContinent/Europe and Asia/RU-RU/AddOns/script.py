# Скрипт создан tizi (я да)
import sys
import subprocess

def main():
    команда = sys.argv[1] if len(sys.argv) > 1 else "Без команды"
    
    if команда == "Без команды":
        print("Команда не была передана")
        return
    if команда == "":
        print("Команда не была передана")
        return

    try:
        вывод = subprocess.check_output(команда, shell=True, stderr=subprocess.STDOUT)
        print(вывод.decode('utf-8', errors='ignore'))
    except subprocess.CalledProcessError as e:
        print(f"Ошибка при выполнении команды: {e.output.decode('utf-8', errors='ignore')}")

if __name__ == "__main__":
    main()
