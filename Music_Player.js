let library = {

  songs: { s01: { id: "s01",
                   name: "Money",
                   artist: "Pink Floyd",
                   album: "Dark Side of the Moon" },
            s02: { id: "s02",
                   name: "Blessings",
                   artist: "Chance, The Rapper",
                   album: "Colouring Book"},
            s03: { id: "s03",
                   name: "Purple Haze",
                   artist: "Jimi Hendrix",
                   album: "Are You Experienced"},
            s04: { id: "s04",
                   name: "Little Wing",
                   artist: "Jimi Hendrix",
                   album: "Are You Experienced"},
          },


  playlists: { p01: { id: "p01",
                      name: "Coding Jamz",
                      tracks: ["s01", "s03"]
                    },
               p02: { id: "p02",
                      name: "Music to cry to",
                      tracks: ["s02"]
                    }
             },


  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  printSongName: function(songID) {
    // console.log(library.songs[songID].name)
    console.log(library.songs[songID].name)
  },

  printAllSongNames: function() {
    let songIDs = Object.keys(library.songs)

    for (i = 0; i < songIDs.length; i++) {
      console.log(library.songs[songIDs[i]].name)
    }

  },

  printPlaylistName: function(playlistID) {
    console.log(library.playlists[playlistID].name)
  },

  printAllPlaylistNames: function() {
    let playlistIDs = Object.keys(library.playlists)

    for (i = 0; i < playlistIDs.length; i++) {
      this.printPlaylistName(playlistIDs[i])
    }

  },


  printPlaylistSongs: function(playlistID) {
    let playlistSongs = library.playlists[playlistID].tracks;
    console.log(playlistSongs);

    for (i = 0; i < playlistSongs.length; i++) {
      library.printSongName(playlistSongs[i])
    }
  },

  addSong: function(songName, songArtist, songAlbum) {
    let newSong = {
      id: library.generateUid(),
      name: songName,
      artist: songArtist,
      album: songAlbum
    }

    library.songs[newSong.id] = newSong;

    console.log(library.songs)

  },

  addSongToPlaylist: function(songID, playlistID) {
    this.printPlaylistSongs(playlistID)
    library.playlists[playlistID].tracks.push(songID)
    this.printPlaylistSongs(playlistID)
  },

  addPlaylist: function(playlistName, arrOfSongs) {
    let newPlaylist = {
      id: library.generateUid,
      name: playlistName,
      tracks: arrOfSongs
    }

    library.playlists[newPlaylist.id] = newPlaylist;

    this.printAllPlaylistNames();


  },





}

// library.printAllSongNames()

// console.log(Object.keys(library.songs.s01))

// library.addSongToPlaylist('s02', 'p02');

// console.log(library.songs);

// console.log(Object.keys(library.songs.s01))

// console.log(library.songs.s01.name)

// library.printAllSongNames()

// library.addSong("Blue World", "Mac Miller", "Circles");

// library.addPlaylist('Skiing Tunes', ['s01', 's03', 's04'])

// console.log(library.generateUid())




