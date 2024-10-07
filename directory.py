import json

heads_pages = {
    "Dr. Ali Imran": 12, 
    "Dr. Ahsan Javed": 12,
    "Dr. Akram Ahsan": 12, 
    "Dr. Javed Iqbal": 4, 
    "Dr. Ijaz Latif": 12,
    "Dr. Munawar Jamil": 9,
    "Dr. Niaz Maqsood": 19,
    "Dr. Asma Shaukat": 15,
    "Dr. Zulifqar Ali": 10, 
    "Dr. Shahid Samejha": 11, 
    "Dr. Shakeela Yasmeen": 20,
    "Dr. Naima Niaz": 13,
    "Dr. Sophia Farukh": 14}
heads = list(heads_pages.keys())

departments_pages = {"Cardiology": 4,
              "Coronory Care Unit": 2, 
              "Dermatology": 13, 
              "Endocrinology": 12, 
              "Gastroenterology": 12,
              "Hematology/Oncology": 15,
              "Infectious Diseases": 12,
              "Neurology": 11,
              "OB/GYN": 20,
              "Opthalmology": 14,
              "Psychiatry": 19, 
              "Pulmonary and Critical Care": 1,
              "Nephrology": 5,
              "Rheumatology": 12,
              "Surgery": 9,
              "Orthopedics": 10,
              "Pediatrics": 6}
departments = list(departments_pages.keys())

locations_pages = {"Pathology Lab": 16,
              "MRI Lab": 7,
              "Radiology Lab": 7,
              "Malaria Ward": 1,
              "Operation Theater": 3,
              "Auditorium": 17,
              "Cafe": 18,
              "COVID Vaccination Center": 1,
              "Acute Emergencies": 1,
              "Post Surgical Medical Unit": 1,
              "Linen Shop": 18,
              "Documentation Keeping Center": 8,
              "Registration Office": 8}
locations = list(locations_pages.keys())

# Export departments, locations, heads, and departments_pages, locations_pages, heads_pages to json files
with open("departments.json", "w") as f:
    json.dump(departments, f)
with open("locations.json", "w") as f:
    json.dump(locations, f)
with open("heads.json", "w") as f:
    json.dump(heads, f)
with open("departments_pages.json", "w") as f:
    json.dump(departments_pages, f)
with open("locations_pages.json", "w") as f:
    json.dump(locations_pages, f)
with open("heads_pages.json", "w") as f:
    json.dump(heads_pages, f)

