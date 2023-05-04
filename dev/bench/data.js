window.BENCHMARK_DATA = {
  "lastUpdate": 1683203764789,
  "repoUrl": "https://github.com/buildpacks/pack",
  "entries": {
    "Go Benchmark": [
      {
        "commit": {
          "author": {
            "email": "freilich.david@gmail.com",
            "name": "David Freilich",
            "username": "dfreilich"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e325cc5a659468cfbb4c9dab57b6fe5974db4a88",
          "message": "Merge pull request #1745 from dmikusa/paketo-jammy\n\nUpdate Paketo stack & builder references to Jammy\r\nSigned-off-by: David Freilich <freilich.david@gmail.com>",
          "timestamp": "2023-05-04T14:45:29+03:00",
          "tree_id": "191edad4ea686305d17ce5d72609e2c6b2e69661",
          "url": "https://github.com/buildpacks/pack/commit/e325cc5a659468cfbb4c9dab57b6fe5974db4a88"
        },
        "date": 1683200816831,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuild/with_Untrusted_Builder",
            "value": 4836875142,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuild/with_Trusted_Builder",
            "value": 1345662281,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuild/with_Addtional_Buildpack",
            "value": 27957377533,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "freilich.david@gmail.com",
            "name": "David Freilich",
            "username": "dfreilich"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "639d2a843831d83317093f36273928ae60ffefb2",
          "message": "Merge pull request #1741 from inspirit941/fix-1709\n\nExtract internal/cache package to public\r\nSigned-off-by: David Freilich <freilich.david@gmail.com>",
          "timestamp": "2023-05-04T15:33:50+03:00",
          "tree_id": "28db4d94a0cb91165d3bfe0b087aa58fcb5ac61e",
          "url": "https://github.com/buildpacks/pack/commit/639d2a843831d83317093f36273928ae60ffefb2"
        },
        "date": 1683203763664,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuild/with_Untrusted_Builder",
            "value": 8745871142,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuild/with_Trusted_Builder",
            "value": 2673230163,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuild/with_Addtional_Buildpack",
            "value": 41734972476,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          }
        ]
      }
    ]
  }
}