import csv

def read_csv_census(file_name):
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
                          
    with open(file_name, 'r') as file:
        reader = csv.DictReader(file)

        for row in reader:
            people_count_by_zone_type[row['CLASS']]['population'] += int(row['RES_CNT'])
            people_count_by_zone_type[row['CLASS']]['count'] += 1
            people_count_by_sector[row['SECTOR']]['population'] += int(row['RES_CNT'])
            people_count_by_sector[row['SECTOR']]['count'] += 1
    
    create_census_report(people_count_by_zone_type, people_count_by_sector)




def create_census_report(zone_data, sector_data):
    string =""
    string += " CENSUS REPORT ".center(60, "-") + "\n"
    string += " POPULATION BY ZONING TYPE ".center(60, "-") + "\n"
    string += "Zone Type".ljust(20) + "Population".ljust(20) + "Lines".ljust(20) + "\n"
    string += "-".center(60, "-") + "\n"
    for zone_type, data in zone_data.items():
        string += f"{zone_type}".ljust(20) + f"{data['population']}".ljust(20) + f"{data['count']}".ljust(20) +"\n"

    string +=  "\n"*2

    string += " POPULATION BY SECTOR ".center(60, "-") + "\n"
    string += "Sector".ljust(20) + "Population".ljust(20) + "Lines".ljust(20) + "\n"
    string += "-".center(60, "-") + "\n"
    for sector, data in sector_data.items():
        string += f"{sector}".title().ljust(20) + f"{data['population']}".ljust(20) + f"{data['count']}".ljust(20) +"\n"
    with open('Census_Report.txt', 'w+') as report:
        report.write(string)

read_csv_census('Census_by_Community_2018.csv')