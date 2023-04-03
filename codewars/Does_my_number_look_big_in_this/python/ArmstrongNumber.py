"""
================ 6 kyu Does my number look big in this? ==================

Нарциссическое число (или число Армстронга) — это положительное число, 
представляющее собой сумму собственных цифр, каждая из которых возведена 
в степень количества цифр в данном основании. 
В этом Ката мы ограничимся десятичными числами (с основанием 10).
==========================================================================

Например, возьмем 153 (3 цифры), что является числом Армстронга:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

    и 1652 (4 цифры), что не является:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

Ваш код должен возвращать истину или ложь (не «истину» и «ложь») в зависимости от того, 
является ли данное число Нарциссическим числом в базе 10.

Это может быть True и False на вашем языке, например PHP.

Проверка ошибок текстовых строк или других недопустимых входных данных не требуется, 
в функцию будут переданы только допустимые положительные ненулевые целые числа.
"""

from abc import ABC, abstractmethod
from typing import Any

class Algorithm(ABC):
    """Абстрактный алгоритма"""

    @abstractmethod
    def calculate(self, *args) -> Any:
        """Интерфейсный метод <расчитать>"""


class AlgorithmArmstrongNum(Algorithm):
    """
    Один из алгоритмов решения задачи.
    1. Преобразование входного числа в 
       строку -> список цифр числа.
    2. Сумма цифр числа в степени <длинна списка>
    3. Возврат равенства исходного и вычисленного числа
    """

    def calculate(self, *args) -> bool:
        arr_digits: list = [int(i) for i in str(args[0])]
        length_num: int = len(arr_digits)
        sum_pow: int = sum([i**length_num for i in arr_digits])

        return sum_pow == args[0]


class ArmstrongNumber:
    """
    Экземпляр принимает входные данные и
    применяет алгоритм
    """

    def __init__(self, value: int) -> None:
            # входные данные
        self.__value: int = value
            # алгоритм
        self.__algorithm: Algorithm = AlgorithmArmstrongNum()


    def set_algorithm(self, algorithm: Algorithm) -> None:
        """Изменить алгоритм. 
           (Ожидается аргументом экземпляр Algorithm)
        """
        if not isinstance(algorithm, Algorithm):
            raise TypeError("\nError: Тип объекта должен быть Algorithm.\n")
        self.__algorithm_calc = algorithm


    def calc(self) -> bool:
        """Применить алгоритм решения задачи."""
        return self.__algorithm.calculate(self.__value)



def narcissistic( value ):
    arm_num = ArmstrongNumber(value)

    return arm_num.calc()

