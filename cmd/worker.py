from apscheduler.schedulers.background import BlockingScheduler
import time

def my_job():
    print(f"[{time.strftime('%Y-%m-%d %H:%M:%S')}] Выполняем задачу...")

if __name__ == "__main__":
    scheduler = BlockingScheduler()
    scheduler.add_job(my_job, "interval", minutes=30)  # Выполнять каждую минуту
    print("Scheduler запущен")
    scheduler.start()