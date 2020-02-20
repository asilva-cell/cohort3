import csv

people_count_by_zone_type = {'Residential': {'population': 0, 'count': 0}, 'Industrial': {
    'population': 0, 'count': 0}, 'Major Park': {'population': 0, 'count': 0}, 'Residual Sub Area': {'population': 0, 'count': 0}}
people_count_by_sector = {'CENTRE': {'population': 0, 'count': 0},
                          'SOUTH': {'population': 0, 'count': 0},
                          'NORTHEAST': {'population': 0, 'count': 0},
                          'NORTHWEST': {'population': 0, 'count': 0},
                          'NORTH': {'population': 0, 'count': 0},
                          'SOUTHEAST': {'population': 0, 'count': 0},
                          'EAST': {'population': 0, 'count': 0},
                          'WEST': {'population': 0, 'count': 0}}
                          
with open('Census_by_Community_2018.csv', 'r') as file:
    reader = csv.DictReader(file)

    for row in reader:
        people_count_by_zone_type[row['CLASS']]['population'] += int(row['RES_CNT'])
        people_count_by_zone_type[row['CLASS']]['count'] += 1

        people_count_by_sector[row['SECTOR']]['population'] += int(row['RES_CNT'])
        people_count_by_sector[row['SECTOR']]['count'] += 1

with open('Census_Report.csv', 'w+') as report:
    string =""
    string += " CENSUS REPORT ".center(70, "-") + "\n"
    string += " POPULATION BY ZONING TYPE ".center(70, "-") + "\n"
    string += "Zone Type".ljust(20) + "Population".ljust(20) + "Lines".ljust(20) + "\n"
    string += "-".center(70, "-") + "\n"
    for zone_type, data in people_count_by_zone_type.items():
       string += f"{zone_type}".ljust(20) + f"{data['population']}".ljust(20) + f"{data['count']}".ljust(20) +"\n"

    string +=  "\n""\n"

    string += " POPULATION BY SECTOR ".center(70, "-") + "\n"
    string += "Sector".ljust(20) + "Population".ljust(20) + "Lines".ljust(20) + "\n"
    string += "-".center(70, "-") + "\n"
    for sector, data in people_count_by_sector.items():
       string += f"{sector}".title().ljust(20) + f"{data['population']}".ljust(20) + f"{data['count']}".ljust(20) +"\n"
    
    report.write(string)