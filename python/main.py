import triangle
import square
import circle

class select_factory:
    def __init__(self, select, base, height, side, radiant):
        self.select = select
        self.base = base
        self.height = height
        self.side = side
        self.radiant = radiant

    def check(self):
        if self.select == 'triangle':
            print(triangle.triangle_factory(self.base, self.height).calculate())
        elif self.select == 'square':
            print(square.square_factory(self.side).calculate())
        elif self.select == 'circle':
            print(circle.circle_factory(self.radiant).calculate())
x = str(input('x: '))
obj = select_factory(x, 4, 4, 4, 4)
obj.check()





