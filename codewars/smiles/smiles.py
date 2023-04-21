

class Smile:
    _permissionEye: tuple = (":", ";")
    _permissionNose: tuple = ("~", "-")
    _permissionMouth: tuple = (")", "D")

    @classmethod
    def getAllPermissionsPartOfFace(cls) -> list:
        return cls._permissionEye + cls._permissionMouth + cls._permissionNose


    def __init__(self, arr: list) -> None:
        self.arr: tuple = tuple(arr)
        self.permissionAll: tuple = self.getAllPermissionsPartOfFace()
        self.countSmiles = 0


    def getCountSmiles(self) -> int:
        for val in self.arr:
            if self.isPermissionFace(val):
                self.countSmiles += 1

        return self.countSmiles


    def isPermissionFace(self, face: str) -> bool:
        eye, nose, mouth = face if len(face) == 3 else (face[0], '-', face[1])
        setFace = set(face)
        return all(list(map(lambda x: x in self.permissionAll, face))) and \
           (1 < len(setFace) <= 3) and self.isEye(eye) and self.isNose(nose) and \
            self.isMouth(mouth)


    def isEye(self, value) -> bool:
        return value in self.__class__._permissionEye

    def isNose(self, value) -> bool:
        return value in self.__class__._permissionNose

    def isMouth(self, value) -> bool:
        return value in self.__class__._permissionMouth


    


def count_smileys(arr):
    smile = Smile(arr)
    return smile.getCountSmiles()


print(count_smileys([':D',':~)',';~D',':)']))