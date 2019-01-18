import requests
import json
import csv
import os
import datetime

tokken = os.getenv("MOVIE_TOKKEN")

def make_csv(record_name, **kwargs):
    with open(record_name, 'w', newline='', encoding="utf-8") as f:
        fieldnames = kwargs.keys()
        writer = csv.DictWriter(f, fieldnames=fieldnames)

        writer.writeheader()
        for i in range(len(list(kwargs.values())[0])):
            for j in range(len(kwargs.values())):
                if j != len(kwargs.values()) - 1:
                    f.write(list(kwargs.values())[j][i] + ",")
                else:
                    f.write(list(kwargs.values())[j][i] + "\n")

def read_csv(read_file):
    with open(read_file, newline='', encoding="utf-8") as csvfile:
        reader = csv.DictReader(csvfile)
        movie_code = []
        for row in reader:
            movie_code.append(row["movie_code"])
        return movie_code

def boxoffice():
    targetDt = "20190113"
    movie_code = []
    title_list = []
    audience_list = []
    recorded_at_list = []
    record_name = 'boxoffice.csv'

    for day in range(10):
        url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=" + tokken +"&targetDt="
        weekGb = "&weekGb=0"
        itemPerPage = "&itemPerPage=10"
        req = requests.get(url + targetDt + weekGb + itemPerPage)
        movie = req.json()

        for i in range(10):
            if movie["boxOfficeResult"]["weeklyBoxOfficeList"][i]["movieCd"] not in movie_code:
                movie_code.append(movie["boxOfficeResult"]["weeklyBoxOfficeList"][i]["movieCd"])
                title_list.append(movie["boxOfficeResult"]["weeklyBoxOfficeList"][i]["movieNm"])
                audience_list.append(movie["boxOfficeResult"]["weeklyBoxOfficeList"][i]["audiAcc"])
                recorded_at_list.append(targetDt)

        dict_box_office = dict(
            movie_code = movie_code,
            title = title_list,
            audience = audience_list,
            recorded_at = recorded_at_list)

        targetDt = datetime.date(int(targetDt[:4]), int(targetDt[4:6]), int(targetDt[-2:]))
        targetDt += datetime.timedelta(weeks=-1)
        targetDt = "".join(str(targetDt).split("-"))
        
    make_csv(record_name, **dict_box_office)

def movie():
    record_name = 'movie.csv'
    movie_code = []
    movie_name_ko = []
    movie_name_en = []
    movie_name_og = []
    prdt_year = []
    genres = []
    directors = []
    watch_grade_nm = []
    actors = [[], [], []]

    movie_code = read_csv('boxoffice.csv')

    for cd_num in movie_code:
        url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=" + tokken + "&movieCd="
        req = requests.get(url + str(cd_num))
        movie = req.json()

        movie_name_ko.append(movie["movieInfoResult"]["movieInfo"]["movieNm"])
        movie_name_en.append(movie["movieInfoResult"]["movieInfo"]["movieNmEn"].replace(",", "，"))
        movie_name_og.append(movie["movieInfoResult"]["movieInfo"]["movieNmOg"])
        prdt_year.append(movie["movieInfoResult"]["movieInfo"]["prdtYear"])
        genres.append("/".join([movie_genre["genreNm"] for movie_genre in movie["movieInfoResult"]["movieInfo"]["genres"]]))
        directors.append("/".join([movie_director["peopleNm"] for movie_director in movie["movieInfoResult"]["movieInfo"]["directors"]]))
        watch_grade_nm.append(movie["movieInfoResult"]["movieInfo"]["audits"][0]["watchGradeNm"])
        for i in range(3):
            if i < len(movie["movieInfoResult"]["movieInfo"]["actors"]) - 1:
                actors[i].append(movie["movieInfoResult"]["movieInfo"]["actors"][i]["peopleNm"])
            else:
                actors[i].append("")

        dict_movie_info = dict(
            movie_code = movie_code,
            movie_name_ko = movie_name_ko,
            movie_name_en = movie_name_en,
            movie_name_og = movie_name_og,
            prdt_year = prdt_year,
            genres = genres,
            directors = directors,
            watch_grade_nm = watch_grade_nm,
            actor1 = actors[0],
            actor2 = actors[1],
            actor3 = actors[2])
        
    make_csv(record_name, **dict_movie_info)

if __name__ == "__main__":
    boxoffice()
    movie()