import enum
import pydantic

class Gender(enum.Enum):
    MALE = 'M'
    FEMALE = 'F'
    NONBINARY = 'NONBINARY'

class UserDetails(pydantic.BaseModel):
    name: str
    gender: Gender
    age: int
    profession: str
    services: str
    found_through: str | None = None