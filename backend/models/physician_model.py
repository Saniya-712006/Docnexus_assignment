#physician_model.py
import uuid


def create_physician(
    npi,
    first_name,
    last_name,
    specialty,
    subspecialty,
    affiliation,
    city,
    state,
    email,
    registration_year,
    accepting_patients,
    board_certified
):
    return {
        "id": str(uuid.uuid4()),
        "npi": npi,
        "firstName": first_name,
        "lastName": last_name,
        "specialty": specialty,
        "subSpecialty": subspecialty,
        "affiliation": affiliation,
        "city": city,
        "state": state,
        "email": email,
        "npiRegistrationYear": registration_year,
        "acceptingPatients": accepting_patients,
        "boardCertified": board_certified
    }