import requests
import json
import csv
import os

client_id = os.getenv("Client_ID")
client_secret = os.getenv("Client_Secret")
credential = {"X-Naver-Client-Id": client_id,
                "X-Naver-Client-Secret": client_secret}

def read_csv(read_file):
    with open(read_file, newline='', encoding="utf-8") as csvfile:
        reader = csv.DictReader(csvfile)
        movie_name_ko_list = []
        movie_code_list = []
        for row in reader:
            movie_name_ko_list.append(row["movie_name_ko"])
            movie_code_list.append(row["movie_code"])
        return movie_name_ko_list, movie_code_list

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

def search():
    movie_name_ko_list = []
    movie_code_list = []
    link_url =[]
    thumb_url = []
    user_rating = []
    movie_name_ko_list, movie_code_list = read_csv("movie.csv")

    for name_ko in movie_name_ko_list:
        url = "	https://openapi.naver.com/v1/search/movie.json?display=1&query="
        req = requests.get(url + str(name_ko), headers=credential)
        movie = req.json()
        link_url.append(movie["items"][0]["link"])
        thumb_url.append(movie["items"][0]["image"])
        user_rating.append(movie["items"][0]["userRating"])

    dict_movie_naver = dict(
            Movie_code = movie_code_list,
            Thumb_url = thumb_url,
            Link_url = link_url,
            User_rating = user_rating)

    make_csv("movie_naver.csv", **dict_movie_naver)

def thumb_down():
    movie_name_ko_list = []
    movie_code_list = []
    thumb_url = []
    movie_name_ko_list, movie_code_list = read_csv("movie.csv")
    os.makedirs("images", exist_ok=True)

    for i in range(len(movie_name_ko_list)):
        url = "	https://openapi.naver.com/v1/search/movie.json?display=1&query="
        req = requests.get(url + str(movie_name_ko_list[i]), headers=credential)
        movie = req.json()
        image = requests.get(movie["items"][0]["image"]).content
        with open("images/" + movie_code_list[i] + ".jpg", 'wb') as f:
            f.write(image)

if __name__ == "__main__":
    search()
    thumb_down()