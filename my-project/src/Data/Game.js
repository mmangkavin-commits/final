const games = [
  {
    id: 1,
    name: "Wuthering Waves",
    genre: "RPG",
    type: "Open World",
    rating: "4.8",
    // ID 1
    developer: "Kuro Games",
    publisher: "Kuro Games",
    releaseDate: "2024-07-04",
    platform: "PC, PS5, Android, iOS",
    mode: "Single-player, Multiplayer",
    description: "An open-world action RPG with fast combat, exploration, and a post-apocalyptic world.",
    image:
      "https://i.pinimg.com/1200x/7f/be/27/7fbe27ac00cade5118f838587d375aa7.jpg",
    badge: "HOT",
  },

  {
    id: 2,
    name: "Genshin Impact",
    genre: "RPG",
    type: "Adventure",
    rating: "4.7",
    // ID 2
    developer: "miHoYo",
    publisher: "HoYoverse",
    releaseDate: "2020-09-28",
    platform: "PC, PS4, PS5, Android, iOS",
    mode: "Single-player, Multiplayer",
    description: "An open-world action RPG set in the fantasy world of Teyvat.",
    image:
      "https://i.pinimg.com/1200x/50/15/7f/50157f44af0460427174fe5c5ffa23e9.jpg",
    badge: "NEW",
  },

  {
    id: 3,
    name: "Mobile Legends",
    genre: "FPS",
    type: "MOBA",
    rating: "4.6",
    // ID 3
    developer: "Moonton",
    publisher: "Moonton",
    releaseDate: "2016-07-14",
    platform: "Android, iOS",
    mode: "Multiplayer",
    description: "A 5v5 multiplayer online battle arena focused on fast team fights and strategy.",
    image:
      "https://i.pinimg.com/736x/8e/06/ba/8e06badd1eb2dddf88969ee83ced5c6b.jpg",
    badge: "HOT",
  },

  {
    id: 4,
    name: "Minecraft",
    genre: "Sandbox",
    type: "Survival",
    rating: "4.9",
    // ID 4
    developer: "Mojang Studios",
    publisher: "Mojang Studios",
    releaseDate: "2011-11-18",
    platform: "PC, PlayStation, Xbox, Nintendo Switch, Android, iOS",
    mode: "Single-player, Multiplayer",
    description: "A sandbox game where players explore, build, craft, and survive in a block-based world.",
    image:
      "https://i.pinimg.com/1200x/bd/b9/34/bdb9348aff8528434791c541589a8e0c.jpg",
  },

  {
    id: 5,
    name: "Honkai:FreeFire",
    genre: "RPG",
    type: "Turn-based",
    rating: "4.8",
    // ID 5
    developer: "miHoYo",
    publisher: "HoYoverse",
    releaseDate: "2023-04-26",
    platform: "PC, PS5, Android, iOS",
    mode: "Single-player, Multiplayer",
    description: "A turn-based space-fantasy RPG featuring story-driven exploration.",
    image:
      "https://i.pinimg.com/1200x/2c/2a/0e/2c2a0ee607b09c77cf9a03e627dcfe6b.jpg",
  },

  {
    id: 6,
    name: "Black Myth Wukong",
    genre: "FPS",
    type: "Action",
    rating: "4.6",
    // ID 6
    developer: "Game Science",
    publisher: "Game Science",
    releaseDate: "2024-08-20",
    platform: "PC, PS5, Xbox Series X/S",
    mode: "Single-player",
    description: "An action RPG inspired by the Chinese legend of Sun Wukong, featuring challenging combat and exploration.",
    image:
      "https://i.pinimg.com/1200x/94/a0/05/94a005143cb5c8cd9bd7beac50bab928.jpg",
  },
  {
    id: 7,
    name: "Valorant",
    genre: "FPS",
    type: "Tactical Shooter",
    rating: "4.7",
    // ID 7
    developer: "Riot Games",
    publisher: "Riot Games",
    releaseDate: "2020-06-02",
    platform: "PC",
    mode: "Multiplayer",
    description: "A tactical shooter where players use unique agent abilities to outmaneuver opponents.",
    image:
      "https://imgs.search.brave.com/4eGFOf-8Of2Q3VUGkgqF09KJB4rcFoFukjK-i2_zZXo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC9kL2Ev/Mi8xODY4ODU5LTM4/NDB4MjE2MC1kZXNr/dG9wLTRrLXZhbG9y/YW50LWJhY2tncm91/bmQtaW1hZ2UuanBn",
    badge: "HOT",
  },

  {
    id: 8,
    name: "Counter-Strike 2",
    genre: "FPS",
    type: "Competitive Shooter",
    developer: "Valve Corporation",
    publisher: "Valve Corporation",
    releaseDate: "2023-09-27",
    platform: "PC",
    mode: "Multiplayer",
    rating: "4.7",
    image:
      "https://imgs.search.brave.com/qTEw2p5OSLFTxWyK1CBPawYd-YQG62Bynm-aLWOteJI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/Y291bnRlci1zdHJp/a2UtMi1yZWxlYXNl/ZC0xLXllYXItYWdv/LXRvZGF5LWhvdy1k/by15b3UtZmVlbC12/MC0weHJxb3B5Ync5/cmQxLmpwZWc_d2lk/dGg9NjQwJmNyb3A9/c21hcnQmYXV0bz13/ZWJwJnM9ZGFhN2Y4/ZjczYWJmMWI0MTUw/MDNiZTFjZTdhZmVm/ZWJlYjBlMmFmOA",
  },

  {
    id: 9,
    name: "Call of Duty: Warzone",
    genre: "FPS",
    type: "Battle Royale",
    rating: "4.6",
    // ID 9
    developer: "Infinity Ward, Raven Software",
    publisher: "Activision",
    releaseDate: "2022-11-16",
    platform: "PC, PS4, PS5, Xbox One, Xbox Series X/S",
    mode: "Single-player, Multiplayer",
    description: "A free-to-play battle royale shooter with large-scale matches, vehicles, and squad combat.",
    image:
      "https://imgs.search.brave.com/ViPjYKCG1vy5KfLh7Wj5kHqgbqAVlj-QmFZq4OpWgZc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvY2Fs/bC1vZi1kdXR5LXdh/cnpvbmUtNGstY3Jh/c2hlZC1oZWxpY29w/dGVyLTNoMHFsZHFp/cXUzMTdyOTQuanBn",
    badge: "HOT",
  },

  {
    id: 10,
    name: "Fortnite",
    genre: "Battle Royale",
    type: "Shooter",
    rating: "4.5",
    // ID 10
    developer: "Epic Games",
    publisher: "Epic Games",
    releaseDate: "2017-07-25",
    platform: "PC, PlayStation, Xbox, Nintendo Switch, Android, iOS",
    mode: "Single-player, Multiplayer",
    description: "A colorful battle royale shooter featuring building, combat, and constantly changing seasons.",
    image:
      "https://imgs.search.brave.com/4gTbX04UbYHAZ3d0Xhg1reSDjElr4vJr6omXV6K3sEM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZXhpdGxhZy5jb20v/YmxvZy93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNC8xMC9Gb3J0/bml0ZS1QaWN0dXJl/cy1UaGUtVWx0aW1h/dGUtVmlzdWFsLUNv/bGxlY3Rpb24tRm9y/LUV2ZXJ5LUZhbi0x/LndlYnA",
  },

  {
    id: 11,
    name: "PUBG: Battlegrounds",
    genre: "Battle Royale",
    type: "Survival Shooter",
    rating: "4.5",
    // ID 11
    developer: "PUBG Studios",
    publisher: "Krafton",
    releaseDate: "2017-12-20",
    platform: "PC, PlayStation, Xbox, Android, iOS",
    mode: "Multiplayer",
    description: "A battle royale shooter where players compete to be the last survivor or team standing.",
    image:
      "https://imgs.search.brave.com/5quxDMJTValnUVBf-29KQdvgsH4__ji1N7-OsdbEBQw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTkw/ODcyLmpwZw",
  },

  {
    id: 12,
    name: "Apex Legends",
    genre: "FPS",
    type: "Battle Royale",
    rating: "4.6",
    // ID 12
    developer: "Respawn Entertainment",
    publisher: "Electronic Arts",
    releaseDate: "2019-02-04",
    platform: "PC, PlayStation, Xbox, Nintendo Switch",
    mode: "Multiplayer",
    description: "A hero-based battle royale shooter featuring unique legends, abilities, movement, and squad tactics.",
    image:
      "https://imgs.search.brave.com/TASHKrMWcG8F5E9KjiWHA9TVttJUY4W2Piec2KEsdBU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNzg4/OTc1Mi5qcGc",
    badge: "NEW",
  },

  {
    id: 13,
    name: "League of Legends",
    genre: "MOBA",
    type: "Competitive",
    rating: "4.7",
    // ID 13
    developer: "Riot Games",
    publisher: "Riot Games",
    releaseDate: "2009-10-27",
    platform: "PC",
    mode: "Multiplayer",
    description: "A team-based MOBA where players choose champions and battle to destroy the opposing base.",
    image:
      "https://imgs.search.brave.com/8NBhC7BSCnM-rBVFynaGgmQGVsuzzhiRRKSjSz7FRCA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nZXR3/YWxscGFwZXJzLmNv/bS93YWxscGFwZXIv/ZnVsbC8zL2IvZi8x/NDk1ODA0LWJlc3Qt/bGVhZ3VlLW9mLWxl/Z2VuZHMtNGstd2Fs/bHBhcGVyLTM4NDB4/MjE2MC1mb3ItZGVz/a3RvcC5qcGc",
  },

  {
    id: 14,
    name: "Dota 2",
    genre: "MOBA",
    type: "Strategy",
    rating: "4.6",
    image:
      "https://imgs.search.brave.com/PYYa-JMLrLBjZp4mO0M5XsMdTjvNjoJqq6d5tdpBcW8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtZWQz/MGE4NmI4YzRjYTg4/Nzc3MzU5NGMyLndp/eG1wLmNvbS9mLzAy/MGUxMTc5LTQ2Zjgt/NDNmZi05YzQ0LTQy/ODBjZGU2MzBlYy9k/ZGM5bGFwLTkwMzJm/ZDU2LTgyZWQtNGJh/MC05MDc2LWY3MjFl/ZTM0ZmUzMC5qcGcv/djEvZmlsbC93XzEy/ODAsaF83MTcscV83/NSxzdHJwL2RvdGFf/Ml9fMjAxOV9fd2Fs/bHBhcGVyX2hkXzRr/X2J5X3NhaGliZG1f/ZGRjOWxhcC1mdWxs/dmlldy5qcGc_dG9r/ZW49ZXlKMGVYQWlP/aUpLVjFRaUxDSmhi/R2NpT2lKSVV6STFO/aUo5LmV5SnpkV0lp/T2lKMWNtNDZZWEJ3/T2pkbE1HUXhPRGc1/T0RJeU5qUXpOek5o/TldZd1pEUXhOV1Zo/TUdReU5tVXdJaXdp/YVhOeklqb2lkWEp1/T21Gd2NEbzNaVEJr/TVRnNE9UZ3lNalkw/TXpjellUVm1NR1Ew/TVRWbFlUQmtNalps/TUNJc0ltOWlhaUk2/VzF0N0ltaGxhV2Rv/ZENJNklqdzlOekUz/SWl3aWNHRjBhQ0k2/SWx3dlpsd3ZNREl3/WlRFeE56a3RORFpt/T0MwME0yWm1MVGxq/TkRRdE5ESTRNR05r/WlRZek1HVmpYQzlr/WkdNNWJHRndMVGt3/TXpKbVpEVTJMVGd5/WldRdE5HSmhNQzA1/TURjMkxXWTNNakZs/WlRNMFptVXpNQzVx/Y0djaUxDSjNhV1Iw/YUNJNklqdzlNVEk0/TUNKOVhWMHNJbUYx/WkNJNld5SjFjbTQ2/YzJWeWRtbGpaVHBw/YldGblpTNXZjR1Z5/WVhScGIyNXpJbDE5/LnR4T3BsUUNJbjBG/eXQybng4OWt4RDdk/RmVFVFZ5cUxqSWVV/bk1BdnZBclE",
  },

  {
    id: 15,
    name: "Elden Ring",
    genre: "RPG",
    type: "Open World",
    rating: "4.9",
    // ID 15
    developer: "FromSoftware",
    publisher: "Bandai Namco Entertainment",
    releaseDate: "2022-02-25",
    platform: "PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S",
    mode: "Single-player, Multiplayer",
    description: "A competitive MOBA combining hero abilities, strategy, item builds, and team coordination.",
    image:
      "https://imgs.search.brave.com/YWrPPETCRhNZn0Wl6ntph4F-4ZOJCpdJVjGlb9sQpFk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE1Njg4/MDU1LmpwZw",
    badge: "HOT",
  },

  {
    id: 16,
    name: "Dark Souls III",
    genre: "RPG",
    type: "Action RPG",
    rating: "4.8",
    // ID 16
    developer: "FromSoftware",
    publisher: "Bandai Namco Entertainment",
    releaseDate: "2016-03-24",
    platform: "PC, PS4, Xbox One",
    mode: "Single-player, Multiplayer",
    description: "A dark action RPG featuring challenging combat, interconnected areas, bosses, and character builds.",
    image:
      "https://imgs.search.brave.com/r_JUOUchz7MH50vX8hB6FXmDZrHd8Dk_Vhobwm22lnw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDM4MDA2/MDUuanBn",
  },

  {
    id: 17,
    name: "Cyberpunk 2077",
    genre: "RPG",
    type: "Open World",
    rating: "4.7",
    // ID 17
    developer: "CD Projekt Red",
    publisher: "CD Projekt",
    releaseDate: "2020-12-10",
    platform: "PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S",
    mode: "Single-player, Multiplayer",
    description: "An open-world RPG set in a dystopian future where players can customize their character and make choices that affect the story.",
    image:
      "https://imgs.search.brave.com/Yj5Y9_9puMKaIIYXY9-E0Nir5WWbMjQTqyzTzBUe-BU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDY4MjQw/NjEuanBn",
  },

  {
    id: 18,
    name: "Red Dead Redemption 2",
    genre: "Adventure",
    type: "Open World",
    rating: "4.9",
    // ID 18
    developer: "Rockstar Games",
    publisher: "Rockstar Games",
    releaseDate: "2018-10-26",
    platform: "PC, PlayStation 4, Xbox One",
    mode: "Single-player, Multiplayer",
    image:
      "https://imgs.search.brave.com/xNvI9YnD_VYTS9eihXYCedpM3vZbfEWrXmB4IJBxLEs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMzQ0/MzE5NC5qcGc",
    badge: "TOP",
  },

  {
    id: 19,
    name: "Grand Theft Auto V",
    genre: "Action",
    type: "Open World",
    rating: "4.8",
    // ID 19
    developer: "Rockstar Games",
    publisher: "Rockstar Games",
    releaseDate: "2013-09-17",
    platform: "PC, PlayStation 3, Xbox 360",
    mode: "Single-player, Multiplayer",
    image:
      "https://imgs.search.brave.com/wPGvRHjS5QMClokLc6UuxxHOcG8v0_hPkHuWxmM8Ehw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Ymhkdy5uZXQvaW0v/Z3JhbmQtdGhlZnQt/YXV0by12LWxvcy1z/YW50b3Mtc3Vuc2V0/LXBhbm9yYW1hLXdh/bGxwYXBlci0xOTM0/MV93NjM1LndlYnA",
  },

  {
    id: 20,
    name: "The Witcher 3",
    genre: "RPG",
    type: "Open World",
    rating: "4.9",
    // ID 20
    developer: "CD Projekt Red",
    publisher: "CD Projekt",
    releaseDate: "2015-05-19",
    platform: "PC, PlayStation 4, Xbox One",
    mode: "Single-player, Multiplayer",
    image:
      "https://imgs.search.brave.com/0Yje9NPNz6eD5zHxUnS8EnIXD7yw9lq1Oph7oSP_39Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNDE0/OTc1LmpwZw",
    badge: "TOP",
  },

  {
    id: 21,
    name: "God of War Ragnarök",
    genre: "Action",
    type: "Adventure",
    rating: "4.9",
    // ID 21
    developer: "Santa Monica Studio",
    publisher: "Sony Interactive Entertainment",
    releaseDate: "2022-10-05",
    platform: "PlayStation 5",
    mode: "Single-player",
    image:
      "https://imgs.search.brave.com/8r2UGifR3UkCQySFDNOiqVoW-tzUVuVN5H0WYAxPaxE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC82L2Iv/OC8xMzQyMzgtMzg0/MHgyMTYwLWRlc2t0/b3AtNGstZ29kLW9m/LXdhci1yYWduYXJv/ay1iYWNrZ3JvdW5k/LmpwZw",
  },

  {
    id: 22,
    name: "Marvel Rivals",
    genre: "Action",
    type: "Hero Shooter",
    rating: "4.7",
    // ID 22
    developer: "High Moon Studios",
    publisher: "Activision Blizzard",
    releaseDate: "2023-06-13",
    platform: "PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S",
    mode: "Single-player, Multiplayer",
    image:
      "https://imgs.search.brave.com/v-sr7YntodkjGKCiK5n7OwPMUiiqFqmyLKJzMTCUewI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTY4/ODE4MjUuanBn",
    badge: "NEW",
  },

  {
    id: 23,
    name: "Overwatch 2",
    genre: "FPS",
    type: "Hero Shooter",
    rating: "4.5",
    // ID 23
    developer: "Blizzard Entertainment",
    publisher: "Activision Blizzard",
    releaseDate: "2022-10-04",
    platform: "PC",
    mode: "Single-player, Multiplayer",
    image:
      "https://imgs.search.brave.com/j01peOuV21MYL16uDEiaQFnesuE_T_FSXOtu9-ICjXI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDk0OTMz/NjEuanBn",
  },

  {
    id: 24,
    name: "Rocket League",
    genre: "Sports",
    type: "Competitive",
    rating: "4.6",
    // ID 24
    developer: "Psyonix",
    publisher: "Epic Games",
    releaseDate: "2015-07-07",
    platform: "PC, PlayStation 4, Xbox One, Nintendo Switch",
    mode: "Single-player, Multiplayer",
    image:
      "https://imgs.search.brave.com/P6fLTWyabbx2vc-hu2PmDNd2HZ7E4Bvrv_-6Wna-B0E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS84My81/NS81aTg3dGQuanBn",
  },

  {
    id: 25,
    name: "EA Sports FC 26",
    genre: "Sports",
    type: "Football",
    rating: "4.5",
    // ID 25
    developer: "EA Sports",
    publisher: "Electronic Arts",
    releaseDate: "2023-09-29",
    platform: "PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S",
    mode: "Single-player, Multiplayer",
    image:
      "https://imgs.search.brave.com/MWEkp7bNx5pF9ITj79NdBJTgccKT_Nh_gOVmb2TpUZ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMjM3/OTg3MjEuanBn",
    badge: "NEW",
  },

  {
    id: 26,
    name: "Terraria",
    genre: "Sandbox",
    type: "Survival",
    rating: "4.8",
    // ID 26
    developer: "Re-Logic",
    publisher: "Re-Logic",
    releaseDate: "2011-05-16",
    platform: "PC, PlayStation 4, Xbox One, Nintendo Switch",
    mode: "Single-player, Multiplayer",
    image:
      "https://imgs.search.brave.com/WoOzhPMEZNn596ijcnh3zoi3BIG00QAIgBg3BkDFNeU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y4LzU4/L2Q3L2Y4NThkNzE2/NzNkODRmMmM0MDg3/NmI2NGMzNmM3ZDA5/LmpwZw",
  },

  {
    id: 27,
    name: "Roblox",
    genre: "Sandbox",
    type: "Multiplayer",
    rating: "4.5",
    // ID 27
    developer: "Roblox Corporation",
    publisher: "Roblox Corporation",
    releaseDate: "2006-01-01",
    platform: "PC, PlayStation 4, Xbox One, Nintendo Switch",
    mode: "Single-player, Multiplayer",
    image:
      "https://imgs.search.brave.com/naoYFw6262FjL7He2fhcoJjbGxaBuLKKMBsOiRoimmg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDgyODY0/OTMuanBn",
  },

  {
    id: 28,
    name: "Palworld",
    genre: "Adventure",
    type: "Survival",
    rating: "4.5",
    // ID 28
    developer: "Pocketpair",
    publisher: "Pocketpair",
    releaseDate: "2023-03-28",
    platform: "PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S",
    mode: "Single-player, Multiplayer",
    image:
      "https://imgs.search.brave.com/LrrZdcewPOnxXd3mQ9rKssXliFbNfI2cQRh4wsF4v8c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTE4/MzI2NjAuanBn",
    badge: "NEW",
  },

  {
    id: 29,
    name: "Hades II",
    genre: "Action",
    type: "Roguelike",
    rating: "4.8",
    // ID 29
    developer: "Supergiant Games",
    publisher: "Supergiant Games",
    releaseDate: "2023-06-07",
    platform: "PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S",
    mode: "Single-player",
    image:
      "https://imgs.search.brave.com/iYpMCrZN7W3nlmHW9-bSD8s-YYg38q1oFzIKl1W4Uyg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMjEz/NzgzNi5qcGc",
  },

  {
    id: 30,
    name: "Stardew Valley",
    genre: "Adventure",
    type: "Simulation",
    rating: "4.9",
    // ID 30
    developer: "ConcernedApe",
    publisher: "ConcernedApe",
    releaseDate: "2016-02-26",
    platform: "PC, PlayStation 4, Xbox One, Nintendo Switch",
    mode: "Single-player",
    image:
      "https://imgs.search.brave.com/5McvbCDmvM-XM5MSxJdAdMVgpwbo3NC9x_o5IEqQbtU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTU0/Nzg1NC5qcGc",
  },
  {
    id: 31,
    name: "Forza Horizon 5",
    genre: "Racing",
    type: "Open World",
    rating: "4.9",
    // ID 31
    developer: "Playground Games",
    publisher: "Xbox Game Studios",
    releaseDate: "2021-10-05",
    platform: "PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S",
    mode: "Single-player, Multiplayer",
    image: "https://imgs.search.brave.com/NU5MX4PWmfMn5qaqI72gAV7WHcdqB8FV_HEXc0sfRr0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEyNDA1/Mjk4LmpwZw",
  },

  {
    id: 32,
    name: "Need for Speed Heat",
    genre: "Racing",
    type: "Street Racing",
    rating: "4.7",
    // ID 32
    developer: "Ghost Games",
    publisher: "Electronic Arts",
    releaseDate: "2023-05-20",
    platform: "PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S",
    mode: "Single-player, Multiplayer",
    image: "https://imgs.search.brave.com/k6qBm-qG3Hq-FB2dRUkDBiCd49h-RVw1d5zaQ5XyyD0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGRxd2FsbHMu/Y29tL3dhbGxwYXBl/cnMvYnRodW1iL25l/ZWQtZm9yLXNwZWVk/LWhlYXQtY2Fycy1w/b2xlc3Rhci00ay03/bC5qcGc",
  },

  {
    id: 33,
    name: "Need for Speed Unbound",
    genre: "Racing",
    type: "Street Racing",
    rating: "4.6",
    // ID 33
    developer: "Ghost Games",
    publisher: "Electronic Arts",
    releaseDate: "2023-09-29",
    platform: "PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S",
    mode: "Single-player, Multiplayer",
    image: "https://imgs.search.brave.com/DdYiUaD0ZqjSXUnMlWHivmMc1XF0bgfQdjCb9w6pfoo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvOTM3/OTcwMy5qcGc",
  },

  {
    id: 34,
    name: "Gran Turismo 7",
    genre: "Racing",
    type: "Simulation",
    rating: "4.8",
    // ID 34
    developer: "Polyphony Digital",
    publisher: "Sony Interactive Entertainment",
    releaseDate: "2023-09-29",
    platform: "PlayStation 5",
    mode: "Single-player",
    image: "https://imgs.search.brave.com/Vfc7hS0RQoPlqG7Zq8rVpPM_78KHLEs13hM20kjYtDM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEyNzEx/MTU2LmpwZw",
  },

  {
    id: 35,
    name: "The Crew Motorfest",
    genre: "Racing",
    type: "Open World",
    rating: "4.7",
    // ID 35
    developer: "Hoodlum",
    publisher: "Ubisoft",
    releaseDate: "2023-09-29",
    platform: "PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S",
    mode: "Single-player, Multiplayer",
    image: "https://imgs.search.brave.com/bxI2kGQlbS5rRltbnzp8xSbsAj7c8TLDH7K11Iikp5I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEyODIy/OTUyLmpwZw",
  },

  {
    id: 36,
    name: "CarX Drift Racing 2",
    genre: "Racing",
    type: "Street Racing",
    rating: "4.5",
    // ID 36
    developer: "CarX Technologies",
    publisher: "CarX Technologies",
    releaseDate: "2023-09-29",
    platform: "PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S",
    mode: "Single-player, Multiplayer",
    image: "https://imgs.search.brave.com/HPl4ZkLFlkRienYZDV74KhwrMP8OAda_EfT8_rPIqFQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTA0/NTgwOTEuanBn",
  },

  {
    id: 37,
    name: "Assetto Corsa",
    genre: "Racing",
    type: "Simulation",
    rating: "4.7",
    // ID 37
    developer: "SimBin Studio",
    publisher: "Kunos Simulazioni",
    releaseDate: "2014-09-26",
    platform: "PC",
    mode: "Single-player, Multiplayer",
    image: "https://imgs.search.brave.com/21ZF22qSgc0y6PQyvfNCGiwwnL8wWLt-hmH0bxzHIAE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEzOTA0/OTU5LmpwZw",
  },

  {
    id: 38,
    name: "BeamNG.drive",
    genre: "Racing",
    type: "Simulation",
    rating: "4.8",
    // ID 38
    developer: "BeamNG",
    publisher: "BeamNG",
    releaseDate: "2014-09-26",
    platform: "PC",
    mode: "Single-player, Multiplayer",
    image: "https://imgs.search.brave.com/5kGAZWRxYPWYOk4Lee168LfGdr9VO-N2Cvg_3qbyTSc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvOTQx/NTAzMC5qcGc",
  },

  {
    id: 39,
    name: "Dirt Rally 2.0",
    genre: "Racing",
    type: "Rally",
    rating: "4.6",
    // ID 39
    developer: "Codemasters",
    publisher: "Codemasters",
    releaseDate: "2020-09-25",
    platform: "PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S",
    mode: "Single-player, Multiplayer",
    image: "https://imgs.search.brave.com/yPNcOaCdikEtgPYYriJaxx74ZjTycrMtBnwbgf8nD0Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDkwOTY1/NDIuanBn",
  },

  {
    id: 40,
    name: "F1 25",
    genre: "Racing",
    type: "Formula Racing",
    rating: "4.7",
    // ID 40
    developer: "Codemasters",
    publisher: "Codemasters",
    releaseDate: "2023-09-29",
    platform: "PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S",
    mode: "Single-player, Multiplayer",
    image: "https://imgs.search.brave.com/pkwIzOQPvMGFY7VKf9DFUlPZrQniJJ183By7UkLH6kY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDExMjUx/NzMxLnBuZw",
  },
  {
    id: 41,
    name: "Car Parking Multiplayer",
    genre: "Racing",
    type: "Simulation",
    rating: "4.6",
    // ID 41
    developer: "Car Parking Multiplayer",
    publisher: "Car Parking Multiplayer",
    releaseDate: "2023-09-29",
    platform: "PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S",
    mode: "Single-player, Multiplayer",
    image: "https://imgs.search.brave.com/etAlAp4JmWkks7vd1mO52GWG4ZPm9-2LObF7ZvjJyVI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/aWxsdXN0cmF0aW9u/LzIwMjUwNjI1L291/cm1pZC9wbmd0cmVl/LXR3by1kaWZmZXJl/bnQtZmVycmFyaS1z/cG9ydHMtY2Fycy1p/bi1hLXBhcmtpbmct/bG90LWltYWdlXzg0/MTQzNi5wbmc",
  },
  {
    id: 42,
    name: "Asphalt 9: Legends",
    genre: "Racing",
    type: "Street Racing",
    rating: "4.5",
    // ID 42
    developer: "Gameloft",
    publisher: "Gameloft",
    releaseDate: "2023-09-29",
    platform: "PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S",
    mode: "Single-player, Multiplayer",
    image: "https://imgs.search.brave.com/Ozqbf6gGFgrfeWu5hm7QyklVyZTBAimOItK6fxslSCQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci84OTQv/NDgwL0hELXdhbGxw/YXBlci1hc3BoYWx0/LTktbGVnZW5kcy1j/YXIuanBn",
  },
  {
    id: 43,
    name: "Ark: Survival Evolved",
    genre: "Adventure",
    type: "Survival",
    rating: "4.6",
    // ID 43
    developer: "Studio Wildcard",
    publisher: "Studio Wildcard",
    releaseDate: "2023-09-29",
    platform: "PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S",
    mode: "Single-player, Multiplayer",
    image: "https://imgs.search.brave.com/y8I7faMp-TprleO2wYMTF22cuFU5gXdJ5x8PPAVdam4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS8yNC82/Mi8wOGVIRXcuanBn",
  }
];

// Randomly shuffle all games
const shuffledGames = [...games];

for (let i = shuffledGames.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));

  [shuffledGames[i], shuffledGames[j]] = [
    shuffledGames[j],
    shuffledGames[i],
  ];
}

export default shuffledGames;