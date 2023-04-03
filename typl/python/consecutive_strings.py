"""
                    6 kyu Consecutive strings
===========================================================================
Вам дан массив (список) strarrстрок и целое число k. 
Ваша задача — вернуть первую самую длинную строку, 
состоящую из k последовательных строк, взятых в массиве.
============================================================================

Примеры:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n — длина массива строк, если n = 0или k > nили k <= 0возвращают "" (возврат Nothingв Elm, "ничего" в Erlang).

Примечание
последовательные строки: следуют одна за другой без перерыва
"""

from abc import ABC, abstractmethod
from typing import Any

class Algorithms(ABC):
    @abstractmethod
    def calculate(self, *args) -> Any:
        pass



class AlgoConsecutiveStr(Algorithms):

    def __init__(self) -> None:
        self.__result: str = ""

    def check_input_arguments(self, args: tuple) -> bool:
        if len(args) == 2:
          return self.is_valid_Arr_and_K(args[0], args[1])


    def is_valid_Arr_and_K(self, arr: list, k: int) -> None:
        return arr and ((k < len(arr)) and (k > 0))


    def calculate(self, *args) -> str:
        empty_str: str = ""
        if self.check_input_arguments(args):
            separate_list: list = []
            increment_var: int = 0
            arr_in, k = args
            if k > 1:
                for _ in range((len(arr_in)-1)):
                    separ: list = arr_in[increment_var : increment_var + k]
                    if separ:
                        separate_list.append(separ)
                    increment_var += k - 1
            else:
                separate_list.extend(arr_in)
            result: list = [''.join(s) for s in separate_list]
            
            return sorted(result, key=len, reverse=True)[0]
        return empty_str


class ConsecutiveStrings:

    def __init__(self, strarr: list, k: int) -> None:
        self.__str_arr: list = strarr
        self.__k: int = k
        self.__algorithm_calc: Algorithms = AlgoConsecutiveStr()


    def set_algorithm(self, algorithm: Algorithms) -> None:
        if not isinstance(algorithm, Algorithms):
            raise TypeError("Не передан объект с алгоритмом решения зачачи.")
        self.__algorithm_calc = algorithm


    def calc(self) -> str:
        return self.__algorithm_calc.calculate(self.__str_arr, self.__k)
            
    

      


cs = ConsecutiveStrings(["zone", "abigail", "theta", "abigail", "form", "libe", "zas"], 2)
print(cs.calc())


