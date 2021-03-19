var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
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
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.0271157622983864,
        "pitch": -0.01073119946317469,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 3.0771052824105567,
          "pitch": -0.0882146721588537,
          "rotation": 0,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-reception",
      "name": "Reception",
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
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.24268805623898437,
        "pitch": 0.03229160009628984,
        "fov": 1.860834202418558
      },
      "linkHotspots": [
        {
          "yaw": 2.2500887018958124,
          "pitch": -0.09367449969683506,
          "rotation": 1.5707963267948966,
          "target": "0-entrance"
        },
        {
          "yaw": 0.3895550162012853,
          "pitch": -0.0259555051972562,
          "rotation": 1.5707963267948966,
          "target": "2-dining-area"
        },
        {
          "yaw": 0.12128208270311802,
          "pitch": -0.16230768822966724,
          "rotation": 1.5707963267948966,
          "target": "7-back-garden"
        },
        {
          "yaw": 0.11605777422097674,
          "pitch": -0.038841893055991505,
          "rotation": 1.5707963267948966,
          "target": "9-room-3"
        },
        {
          "yaw": 0.11103557817877885,
          "pitch": 0.10631832889373882,
          "rotation": 7.853981633974483,
          "target": "10-room-11"
        },
        {
          "yaw": -0.06309727900271156,
          "pitch": -0.09481075351055068,
          "rotation": 5.497787143782138,
          "target": "11-room-17"
        },
        {
          "yaw": -0.06753984154935111,
          "pitch": 0.03955397187267451,
          "rotation": 5.497787143782138,
          "target": "12-room-32"
        },
        {
          "yaw": -0.05811288133410386,
          "pitch": -0.21560430636713868,
          "rotation": 5.497787143782138,
          "target": "6-upstairs-lounge"
        },
        {
          "yaw": 1.0297461253245572,
          "pitch": -0.02761759236160266,
          "rotation": 1.5707963267948966,
          "target": "4-small-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining-area",
      "name": "Dining Area",
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
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.003845049986161,
        "pitch": 0.5551086500804345,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -2.290889372574984,
          "pitch": 0.04367994799108388,
          "rotation": 1.5707963267948966,
          "target": "3-main-lounge"
        },
        {
          "yaw": -2.4410752099283783,
          "pitch": 0.048871273116191105,
          "rotation": 5.497787143782138,
          "target": "5-sun-lounge"
        },
        {
          "yaw": -0.40860565052152076,
          "pitch": 0.061593885599815934,
          "rotation": 0,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-main-lounge",
      "name": "Main Lounge",
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
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.4443953883085996,
        "pitch": 0.006918190673495417,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -0.29672419634014346,
          "pitch": -0.05627233406065635,
          "rotation": 14.137166941154074,
          "target": "4-small-lounge"
        },
        {
          "yaw": 2.733477811524855,
          "pitch": -0.018626793483468518,
          "rotation": 7.853981633974483,
          "target": "5-sun-lounge"
        },
        {
          "yaw": 1.5901596455830038,
          "pitch": 0.01858114520957166,
          "rotation": 4.71238898038469,
          "target": "2-dining-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-small-lounge",
      "name": "Small Lounge",
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
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.22536132753962335,
        "pitch": 0.03991526340460538,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 0.5941514499220801,
          "pitch": -0.1037411178244465,
          "rotation": 4.71238898038469,
          "target": "3-main-lounge"
        },
        {
          "yaw": -2.5491047460250584,
          "pitch": 0.016798023886220648,
          "rotation": 29.845130209103058,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-sun-lounge",
      "name": "Sun Lounge",
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
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.3413524664667698,
        "pitch": 0.06046500079900241,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -2.2960956068235383,
          "pitch": -0.050705515557195824,
          "rotation": 1.5707963267948966,
          "target": "8-side-garden"
        },
        {
          "yaw": 2.037203606140497,
          "pitch": 0.15137420385626044,
          "rotation": 0.7853981633974483,
          "target": "2-dining-area"
        },
        {
          "yaw": 1.7605459557610628,
          "pitch": 0.12363876075887426,
          "rotation": 11.780972450961727,
          "target": "3-main-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-upstairs-lounge",
      "name": "Upstairs Lounge",
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
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.5539359665264385,
        "pitch": 0.09129205046722433,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -0.34889697820515053,
          "pitch": 0.0007239945080463883,
          "rotation": 4.71238898038469,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-back-garden",
      "name": "Back Garden",
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
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.6310193938159134,
        "pitch": 0.13438790453644955,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 1.8646390735157965,
          "pitch": -0.025418830677805815,
          "rotation": 0.7853981633974483,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-side-garden",
      "name": "Side Garden",
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
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.0787877570131705,
        "pitch": 0.04669048279527033,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -2.560820965717854,
          "pitch": 0.037360106136967275,
          "rotation": 4.71238898038469,
          "target": "5-sun-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-room-3",
      "name": "Room 3",
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
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.20488647740802968,
        "pitch": 0.06786426114295097,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 2.7363477213300733,
          "pitch": 0.044200986600458236,
          "rotation": 6.283185307179586,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-room-11",
      "name": "Room 11",
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
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.9500194913844773,
        "pitch": 0.12543552944032754,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 0.2925815859721901,
          "pitch": 0.18880539824483833,
          "rotation": 0.7853981633974483,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-room-17",
      "name": "Room 17",
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
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.15965069341377713,
        "pitch": 0.0472661873259721,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 2.8266047830886603,
          "pitch": 0.005505611550766787,
          "rotation": 0,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-room-32",
      "name": "Room 32",
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
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.03455173520846344,
        "pitch": 0.023491475011020668,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 3.02087351315868,
          "pitch": -0.12438893645267868,
          "rotation": 4.71238898038469,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
