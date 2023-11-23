module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "secondary": {
          "grey400": "#eff0f2ff",
          "gray500": "#d9d9d9ff"
        },
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "primary1": {
          "blue100": "#291477ff",
          "blue80": "#5228f5ff",
          "blue60": "#e2ddf5ff"
        },
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "800": "#595959",
          "900": "#D9D9D9",
          "Black": "#000000",
          "White": "#FFFFFF"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "ThreeUnits": "48px",
        "FiveUnits": "80px",
        "HalfUnit": "8px",
        "SixUnits": "96px",
        "OneAndHalfUnits": "24px",
        "TwoUnits": "32px",
        "FourUnits": "64px",
        "Unit": "16px"
      },
      "borderRadius": {
        "Radius8": "8px",
        "Radius2": "2px",
        "Round": "50%",
        "Radius4": "4px"
      },
      "scale": {
        "XXLarge": "288px",
        "Small": "48px",
        "Medium": "96px",
        "XSmall": "16px",
        "Large": "144px",
        "XLarge": "192px",
        "MaxWidth": "1400px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ]
}