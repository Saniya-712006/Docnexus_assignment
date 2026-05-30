#A script that inserts initial data into the database.
import sys
import os

sys.path.append(
    os.path.abspath(
        os.path.join(os.path.dirname(__file__), "..")
    )
)
from config import db
from models.physician_model import create_physician

oncology_physicians = []
cardiology_physicians = []
neurology_physicians = []
dermatology_physicians = []
pediatrics_physicians = []

oncology_physicians.extend([

    # Oncology
    create_physician(
        npi="1234567890",
        first_name="Sarah",
        last_name="Lee",
        specialty="Oncology",
        subspecialty="Medical Oncology",
        affiliation="Stanford Health",
        city="Palo Alto",
        state="CA",
        email="sarah.lee@stanfordhealth.org",
        registration_year=2014,
        accepting_patients=True,
        board_certified=True
    ),

    create_physician(
        npi="1234567891",
        first_name="Michael",
        last_name="Chen",
        specialty="Oncology",
        subspecialty="Radiation Oncology",
        affiliation="Mayo Clinic",
        city="Rochester",
        state="MN",
        email="michael.chen@mayoclinic.org",
        registration_year=2012,
        accepting_patients=True,
        board_certified=True
    ),

        create_physician(
        "1234567895","Rachel","Kim","Oncology","Breast Oncology",
        "UCLA Health","Los Angeles","CA",
        "rachel.kim@uclahealth.org",2015,True,True
    ),
    create_physician(
        "1234567896","Andrew","Miller","Oncology","Thoracic Oncology",
        "Memorial Sloan Kettering","New York","NY",
        "andrew.miller@mskcc.org",2011,True,True
    ),
    create_physician(
        "1234567897","Priya","Shah","Oncology","Hematologic Oncology",
        "MD Anderson Cancer Center","Houston","TX",
        "priya.shah@mdanderson.org",2017,False,True
    )
])


cardiology_physicians.extend([
    # Cardiology
    create_physician(
        npi="1234567892",
        first_name="David",
        last_name="Wilson",
        specialty="Cardiology",
        subspecialty="Interventional Cardiology",
        affiliation="Cleveland Clinic",
        city="Cleveland",
        state="OH",
        email="david.wilson@clevelandclinic.org",
        registration_year=2011,
        accepting_patients=True,
        board_certified=True
    ),

    create_physician(
        npi="1234567893",
        first_name="Emily",
        last_name="Roberts",
        specialty="Cardiology",
        subspecialty="Electrophysiology",
        affiliation="Mass General Hospital",
        city="Boston",
        state="MA",
        email="emily.roberts@mgh.org",
        registration_year=2016,
        accepting_patients=False,
        board_certified=True
    ),

    create_physician(
        "1234567898","Robert","Johnson","Cardiology","Heart Failure",
        "Cedars-Sinai","Los Angeles","CA",
        "robert.johnson@cshs.org",2010,True,True
    ),
    create_physician(
        "1234567899","Sophia","Brown","Cardiology","Preventive Cardiology",
        "Northwestern Medicine","Chicago","IL",
        "sophia.brown@nm.org",2018,True,True
    ),
    create_physician(
        "1234567800","Kevin","Davis","Cardiology","Interventional Cardiology",
        "Mount Sinai","New York","NY",
        "kevin.davis@mountsinai.org",2013,False,True
    )
])

neurology_physicians.extend([
    # Neurology
    create_physician(
        npi="1234567894",
        first_name="James",
        last_name="Patel",
        specialty="Neurology",
        subspecialty="Stroke Neurology",
        affiliation="Johns Hopkins Hospital",
        city="Baltimore",
        state="MD",
        email="james.patel@jhmi.edu",
        registration_year=2013,
        accepting_patients=True,
        board_certified=True
    ),

    create_physician(
        "1234567801","Laura","Martinez","Neurology","Epilepsy",
        "UCSF Health","San Francisco","CA",
        "laura.martinez@ucsf.edu",2012,True,True
    ),
    create_physician(
        "1234567802","Daniel","Garcia","Neurology","Movement Disorders",
        "Mayo Clinic","Phoenix","AZ",
        "daniel.garcia@mayoclinic.org",2014,True,True
    ),
    create_physician(
        "1234567803","Nina","Verma","Neurology","Neurocritical Care",
        "Cleveland Clinic","Cleveland","OH",
        "nina.verma@ccf.org",2016,False,True
    ),
    create_physician(
        "1234567804","Jason","Wright","Neurology","Multiple Sclerosis",
        "Johns Hopkins Hospital","Baltimore","MD",
        "jason.wright@jhmi.edu",2011,True,True
    )
])


dermatology_physicians = [
    create_physician(
        "1234567805","Olivia","Clark","Dermatology","Cosmetic Dermatology",
        "NYU Langone","New York","NY",
        "olivia.clark@nyulangone.org",2015,True,True
    ),
    create_physician(
        "1234567806","Matthew","Lewis","Dermatology","Mohs Surgery",
        "Mass General Hospital","Boston","MA",
        "matthew.lewis@mgh.org",2012,True,True
    ),
    create_physician(
        "1234567807","Ava","Turner","Dermatology","Pediatric Dermatology",
        "Children's National Hospital","Washington","DC",
        "ava.turner@childrensnational.org",2017,True,True
    ),
    create_physician(
        "1234567808","Ryan","Hall","Dermatology","Dermatopathology",
        "Stanford Health","Palo Alto","CA",
        "ryan.hall@stanfordhealth.org",2010,False,True
    ),
    create_physician(
        "1234567809","Grace","Young","Dermatology","General Dermatology",
        "Mayo Clinic","Jacksonville","FL",
        "grace.young@mayoclinic.org",2018,True,True
    )
]

pediatrics_physicians = [
    create_physician(
        "1234567810","Emma","White","Pediatrics","General Pediatrics",
        "Boston Children's Hospital","Boston","MA",
        "emma.white@childrens.harvard.edu",2016,True,True
    ),
    create_physician(
        "1234567811","Benjamin","Scott","Pediatrics","Pediatric Cardiology",
        "Texas Children's Hospital","Houston","TX",
        "benjamin.scott@texaschildrens.org",2012,True,True
    ),
    create_physician(
        "1234567812","Chloe","Green","Pediatrics","Pediatric Oncology",
        "Children's Hospital Los Angeles","Los Angeles","CA",
        "chloe.green@chla.org",2015,True,True
    ),
    create_physician(
        "1234567813","Lucas","Adams","Pediatrics","Neonatology",
        "Nationwide Children's Hospital","Columbus","OH",
        "lucas.adams@nationwidechildrens.org",2011,False,True
    ),
    create_physician(
        "1234567814","Mia","Baker","Pediatrics","Developmental Pediatrics",
        "Seattle Children's Hospital","Seattle","WA",
        "mia.baker@seattlechildrens.org",2019,True,True
    )
]

physicians = (
    oncology_physicians
    + cardiology_physicians
    + neurology_physicians
    + dermatology_physicians
    + pediatrics_physicians
)

# Clear old data
print("Clearing existing physicians...")
db.physicians.delete_many({})

# Insert fresh data
print("Seeding physicians...")
result = db.physicians.insert_many(physicians)

print(f"Inserted {len(result.inserted_ids)} physicians successfully")