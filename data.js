var APP_DATA = {
  "scenes": [
    {
      "id": "0-macknext-vue-terrasse",
      "name": "MackNext vue terrasse",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.41569238083293
      },
      "linkHotspots": [
        {
          "yaw": 0.021613781750872363,
          "pitch": 0.5143133044425383,
          "rotation": 3.141592653589793,
          "target": "2-macknext-vue-ponton"
        },
        {
          "yaw": -1.591484567827429,
          "pitch": -0.005495248592778168,
          "rotation": 3.9269908169872414,
          "target": "1-macknext-vue-parking"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-macknext-vue-parking",
      "name": "MackNext vue parking",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6016074519157684,
          "pitch": -0.010606480597544987,
          "rotation": 1.5707963267948966,
          "target": "3-mackone-vue-golf"
        },
        {
          "yaw": 0.3726863612229945,
          "pitch": -0.006692619422928203,
          "rotation": 7.853981633974483,
          "target": "2-macknext-vue-ponton"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-macknext-vue-ponton",
      "name": "MackNext vue ponton",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.30792014932877265,
          "pitch": -0.024380269344785432,
          "rotation": 2.356194490192345,
          "target": "4-mackone-vue-schopf"
        },
        {
          "yaw": 3.0606850348918506,
          "pitch": -0.32860260482987513,
          "rotation": 9.42477796076938,
          "target": "0-macknext-vue-terrasse"
        },
        {
          "yaw": -2.39813245009881,
          "pitch": -0.019787105877147937,
          "rotation": 2.356194490192345,
          "target": "1-macknext-vue-parking"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-mackone-vue-golf",
      "name": "MackONE vue golf",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.32973733276479145,
          "pitch": -0.00047275365377963396,
          "rotation": 9.42477796076938,
          "target": "4-mackone-vue-schopf"
        },
        {
          "yaw": 0.9952352486719,
          "pitch": -0.01058919419394222,
          "rotation": 4.71238898038469,
          "target": "1-macknext-vue-parking"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-mackone-vue-schopf",
      "name": "MackONE vue Schopf",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7155229508793468,
          "pitch": -0.013071906772783137,
          "rotation": 2.356194490192345,
          "target": "3-mackone-vue-golf"
        },
        {
          "yaw": 2.156989407989421,
          "pitch": 0.0019186340302894678,
          "rotation": 3.9269908169872414,
          "target": "2-macknext-vue-ponton"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
