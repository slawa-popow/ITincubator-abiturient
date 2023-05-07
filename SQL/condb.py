import psycopg2
from psycopg2 import Error
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT
from getpass import getpass # для ввода пароля


# try:
#     connection = psycopg2.connect(user='slava',
#                                   password='2586587',
#                                   host="127.0.0.1",
#                                   port="5432",
#                                   database="firstdb")
#     print("Информация о сервере PostgreSQL")
#     print(connection.get_dsn_parameters(), "\n")
#     cursor = connection.cursor()
#     cursor.execute('select * from genre')
#     record = cursor.fetchone()
#     print(record)
# except (Exception, Error) as error:
#     print("Ошибка при работе с PostgreSQL", error)

# finally:
#     if connection:
#         cursor.close()
#         connection.close()
#         print("Соединение с PostgreSQL закрыто")

class Connector:

    def __init__(self, user: str, host: str, dbname: str) -> None:
        self.user: str = user
        self.host: str = host
        self.dbname: str = dbname
        self.password = None    # 2586587
        self.port = "5432"

    def input_password(self) -> str:
        print('-' * 15 + ' пароль от бд: ' + '-' * 15)
        psw = getpass()
        print()

        return psw


    def connect_db(self, table) -> None:
        connection = None
        try:
            connection = psycopg2.connect(user=self.user,
                                    password=self.input_password(), 
                                    host=self.host,
                                    port=self.port,
                                    database=self.dbname)

            print("Информация о сервере PostgreSQL")
            print(connection.get_dsn_parameters(), "\n")
            cursor = connection.cursor()
            cursor.execute(f'select * from {table}')
            record = cursor.fetchone()
            print('-'* 40)
            print(record)
            print('-' * 40)

        except (Exception, Error) as error:
            print("Ошибка при работе с PostgreSQL", error)

        finally:
            if connection:
                cursor.close()
                connection.close()
                print("Соединение с PostgreSQL закрыто")


c = Connector('slava',"127.0.0.1" , "firstdb")
c.connect_db('genre')