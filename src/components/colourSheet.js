import React from 'react';

class ColourBox extends React.Component {
    render() {
        const colour = this.props.colour;
        
        return(
            <td className={colour.name}><p className="name">{colour.name}</p>
            <p className="hex">{colour.hex}</p></td>
        )
    }
}

class ColourRow extends React.Component {
    render() {
        const row = [];

        this.props.colours.forEach((colour) => {
            row.push(
                <ColourBox
                    colour={colour}
                />
            );
        });

        return(
            <tr>{row}</tr>
        )
    }
}

class ColourTable extends React.Component {
    render() {
        const rows = [];
        let coloursTemp = this.props.colours;
        let colours = [];

        for (let i = 0; i < coloursTemp.length; i += 5) {
            colours.push(coloursTemp.slice(i, i + 5))
        }

        colours.forEach((row) => {
            rows.push(
                <ColourRow colours={row}/>
            );
        });
        
        return(
            <div>
                <h2>{coloursTemp[0].families[0].charAt(0).toUpperCase() + coloursTemp[0].families[0].slice(1)} Variations</h2>
                <table>{rows}</table>
            </div>
        )
    }
}

class ColourSheet extends React.Component {
    render() {
        const tables = [];
        let colours = COLOURS;

        colours.forEach((table) => {
            tables.push(
                <ColourTable colours={table}/>
            );
        });

        return(
            <div className="page">
                <h1>HTML Colour Names</h1>
                {tables}
            </div>
        )
    }
}

const COLOURS = [
    [
        {name: "LightSalmon", hex: "#FFA07A", rgb: "RGB(255,160,122)", families: ["red","pink","orange","salmon","light"]},
        {name: "Salmon", hex: "#FA8072", rgb: "RGB(250,128,114)", families: ["red","pink","orange","salmon"]},
        {name: "DarkSalmon", hex: "#E9967A", rgb: "RGB(233,150,122)", families: ["red","pink","orange","salmon","dark"]},
        {name: "LightCoral", hex: "#F08080", rgb: "RGB(240,128,128)", families: ["red","pink","coral","light"]},
        {name: "IndianRed", hex: "#CD5C5C", rgb: "RGB(205,92,92)", families: ["red","brown"]},
        {name: "Crimson", hex: "#DC143C", rgb: "RGB(220,20,60)", families: ["red"]},
        {name: "Red", hex: "#FF0000", rgb: "RGB(255,0,0)", families: ["red"]},
        {name: "FireBrick", hex: "#B22222", rgb: "RGB(178,34,34)", families: ["red","dark"]},
        {name: "DarkRed", hex: "#8B0000", rgb: "RGB(139,0,0)", families: ["red","dark"]}
    ],
    [
        {name: "Orange", hex: "#FFA500", rgb: "RGB(255,165,0)", families: ["orange"]},
        {name: "DarkOrange", hex: "#FF8C00", rgb: "RGB(255,140,0)", families: ["orange","dark"]},
        {name: "Coral", hex: "#FF7F50", rgb: "RGB(255,127,80)", families: ["orange","coral"]},
        {name: "Tomato", hex: "#FF6347", rgb: "RGB(255,99,71", families: ["orange","red"]},
        {name: "OrangeRed", hex: "#FF4500", rgb: "RGB(255,69,0)", families: ["orange","red"]}
    ],
    [
        {name: "Gold", hex: "#FFD700", rgb: "RGB(255,215,0)", families: ["yellow"]},
        {name: "Yellow", hex: "#FFFF00", rgb: "RGB(255,255,0)", families: ["yellow"]},
        {name: "LightYellow", hex: "#FFFFE0", rgb: "RGB(255,255,224)", families: ["yellow","light"]},
        {name: "LemonChiffon", hex: "#FFFACD", rgb: "RGB(255,250,205)", families: ["yellow","lemon"]},
        {name: "LightGoldenRodYellow", hex: "#FAFAD2", rgb: "RGB(250,250,210)", families: ["yellow","light","goldenrod","tan"]},
        {name: "PapayaWhip", hex: "#FFEFD5", rgb: "RGB(255,239,213)", families: ["pink","tan"]},
        {name: "Moccasin", hex: "#FFE4B5", rgb: "RGB(255,228,181)", families: ["pink","tan"]},
        {name: "PeachPuff", hex: "#FFDAB9", rgb: "RGB(255,218,185)", families: ["pink","orange","peach"]},
        {name: "PaleGoldenRod", hex: "#EEE8AA", rgb: "RGB(238,232,170)", families: ["yellow","tan","pale","goldenrod"]},
        {name: "Khaki", hex: "#F0E68C", rgb: "RGB(240,230,140)", families: ["yellow","tan","khaki"]},
        {name: "DarkKhaki", hex: "#BDB76B", rgb: "RGB(189,183,107)", families: ["yellow","tan","khaki","dark"]}
    ],
    [
        {name: "GreenYellow", hex: "#ADFF2F", rgb: "RGB(173,255,47)", families: ["green","yellow"]},
        {name: "Chartreuse", hex: "#7FFF00", rgb: "RGB(127,255,0)", families: ["green"]},
        {name: "LawnGreen", hex: "#7CFC00", rgb: "RGB(124,252,0)", families: ["green"]},
        {name: "Lime", hex: "#00FF00", rgb: "RGB(0,255,0)", families: ["green"]},
        {name: "LimeGreen", hex: "#32CD32", rgb: "RGB(50,205,50)", families: ["green"]},
        {name: "PaleGreen", hex: "#98FB98", rgb: "RGB(152,251,152)", families: ["green","pale"]},
        {name: "LightGreen", hex: "#90EE90", rgb: "RGB(144,238,144)", families: ["green","light"]},
        {name: "MediumSpringGreen", hex: "#00FA9A", rgb: "RGB(0,250,154)", families: ["green","medium","spring"]},
        {name: "SpringGreen", hex: "#00FF7F", rgb: "RGB(0,255,127)", families: ["green","spring"]},
        {name: "MediumSeaGreen", hex: "#3CB371", rgb: "RGB(60,179,113)", families: ["green","sea","medium"]},
        {name: "SeaGreen", hex: "#2E8B57", rgb: "RGB(46,139,87)", families: ["green","sea"]},
        {name: "ForestGreen", hex: "#228B22", rgb: "RGB(34,139,34)", families: ["green","forest"]},
        {name: "Green", hex: "#008000", rgb: "RGB(0,128,0)", families: ["green"]},
        {name: "DarkGreen", hex: "#006400", rgb: "RGB(0,100,0)", families: ["green","dark"]},
        {name: "YellowGreen", hex: "#9ACD32", rgb: "RGB(154,205,50)", families: ["green","yellow"]},
        {name: "Olive", hex: "#6B8E23", rgb: "RGB(128,128,0)", families: ["green","olive"]},
        {name: "OliveDrab", hex: "#6B8E23", rgb: "RGB(107,142,35)", families: ["green","olive"]},
        {name: "DarkOliveGreen", hex: "#556B2F", rgb: "RGB(85,107,47)", families: ["green","olive","dark"]},
        {name: "MediumAquaMarine", hex: "#66CDAA", rgb: "RGB(102,205,170)", families: ["green","blue","aquamarine","medium"]},
        {name: "DarkSeaGreen", hex: "#8FBC8B", rgb: "RGB(143,188,139)", families: ["green","sea","dark"]},
        {name: "LightSeaGreen", hex: "#20B2AA", rgb: "RGB(32,178,170)", families: ["green","blue","sea","light"]},
        {name: "DarkCyan", hex: "#008B8B", rgb: "RGB(0,139,139)", families: ["green","blue","cyan","dark"]},
        {name: "Teal", hex: "#008080", rgb: "RGB(0,128,128)", families: ["green","blue"]}
    ],
    [
        {name: "Aqua", hex: "#00FFFF", rgb: "RGB(0,255,255)", families: ["cyan", "blue","aqua"]},
        {name: "Cyan", hex: "#00FFFF", rgb: "RGB(0,255,255)", families: ["cyan", "blue"]},
        {name: "LightCyan", hex: "#E0FFFF", rgb: "RGB(224,255,255)", families: ["cyan", "blue","light"]},
        {name: "PaleTurquoise", hex: "#AFEEEE", rgb: "RGB(175,238,238)", families: ["cyan", "blue","turquoise","pale"]},
        {name: "Aquamarine", hex: "#7FFFD4", rgb: "RGB(127,255,212)", families: ["cyan", "blue","aquamarine"]},
        {name: "Turquoise", hex: "#40E0D0", rgb: "RGB(64,224,208)", families: ["cyan", "blue","turquoise"]},
        {name: "MediumTurquoise", hex: "#48D1CC", rgb: "RGB(72,209,204)", families: ["cyan", "blue","turquoise","medium"]},
        {name: "DarkTurquoise", hex: "#00CED1", rgb: "RGB(0,206,209)", families: ["cyan", "blue","turquoise","dark"]},
    ],
    [
        {name: "CadetBlue", hex: "#5F9EA0", rgb: "RGB(95,158,160)", families: ["blue","gray"]},
        {name: "SteelBlue", hex: "#4682B4", rgb: "RGB(70,130,180)", families: ["blue","steel"]},
        {name: "LightSteelBlue", hex: "#B0C4DE", rgb: "RGB(176,196,222)", families: ["blue","steel","light"]},
        {name: "PowderBlue", hex: "#B0E0E6", rgb: "RGB(176,224,230)", families: ["blue"]},
        {name: "LightBlue", hex: "#ADD8E6", rgb: "RGB(173,216,230)", families: ["blue","light"]},
        {name: "SkyBlue", hex: "#87CEEB", rgb: "RGB(135,206,235)", families: ["blue","sky"]},
        {name: "LightSkyBlue", hex: "#87CEFA", rgb: "RGB(135,206,250)", families: ["blue","sky","light"]},
        {name: "DeepSkyBlue", hex: "#00BFFF", rgb: "RGB(0,191,255)", families: ["blue","sky","deep"]},
        {name: "DodgerBlue", hex: "#1E90FF", rgb: "RGB(30,144,255)", families: ["blue"]},
        {name: "CornflowerBlue", hex: "#6495ED", rgb: "RGB(100,149,237)", families: ["blue"]},
        {name: "RoyalBlue", hex: "#4169E1", rgb: "RGB(65,105,225)", families: ["blue"]},
        {name: "Blue", hex: "#0000FF", rgb: "RGB(0,0,255)", families: ["blue"]},
        {name: "MediumBlue", hex: "#0000CD", rgb: "RGB(0,0,205)", families: ["blue","medium"]},
        {name: "DarkBlue", hex: "#00008B", rgb: "RGB(0,0,139)", families: ["blue","dark"]},
        {name: "Navy", hex: "#00008B", rgb: "RGB(0,0,128)", families: ["blue","dark"]},
        {name: "MidnightBlue", hex: "#191970", rgb: "RGB(25,25,112))", families: ["blue","dark"]}
    ],
    [
        {name: "Lavender", hex: "#E6E6FA", rgb: "RGB(230,230,250)", families: ["purple"]},
        {name: "Thistle", hex: "#D8BFD8", rgb: "RGB(216,191,216)", families: ["purple"]},
        {name: "Plum", hex: "#DDA0DD", rgb: "RGB(221,160,221)", families: ["purple"]},
        {name: "Violet", hex: "#EE82EE", rgb: "RGB(238,130,238)", families: ["purple","violet","pink"]},
        {name: "Orchid", hex: "#DA70D6", rgb: "RGB(218,112,214)", families: ["purple","orchid"]},
        {name: "Fuchsia", hex: "#FF00FF", rgb: "RGB(255,0,255)", families: ["purple","pink"]},
        {name: "Magenta", hex: "#FF00FF", rgb: "RGB(255,0,255)", families: ["purple","pink","magenta"]},
        {name: "MediumOrchid", hex: "#BA55D3", rgb: "RGB(186,85,211)", families: ["purple","orchid","medium"]},
        {name: "MediumPurple", hex: "#9370DB", rgb: "RGB(147,112,219)", families: ["purple","medium"]},
        {name: "RebeccaPurple", hex: "#663399", rgb: "RGB(102,51,153)", families: ["purple","blue"]},
        {name: "BlueViolet", hex: "#8A2BE2", rgb: "RGB(138,43,226)", families: ["purple","blue","violet"]},
        {name: "DarkViolet", hex: "#9400D3", rgb: "RGB(148,0,211)", families: ["purple","dark","violet"]},
        {name: "DarkOrchid", hex: "#9932CC", rgb: "RGB(153,50,204)", families: ["purple","dark","orchid"]},
        {name: "DarkMagenta", hex: "#8B008B", rgb: "RGB(139,0,139)", families: ["purple","dark","magenta"]},
        {name: "Purple", hex: "#800080", rgb: "RGB(128,0,128)", families: ["purple"]},
        {name: "Indigo", hex: "#4B0082", rgb: "RGB(75,0,130)", families: ["purple","blue"]},
        {name: "SlateBlue", hex: "#6A5ACD", rgb: "RGB(106,90,205)", families: ["purple","blue","slate"]},
        {name: "DarkSlateBlue", hex: "#483D8B", rgb: "RGB(72,61,139)", families: ["purple","blue","slate","dark"]},
        {name: "MediumSlateBlue", hex: "#7B68EE", rgb: "RGB(123,104,238)", families: ["purple","blue","slate","medium"]}
    ],
    [
        {name: "Pink", hex: "#FFC0CB", rgb: "RGB(255,192,203)", families: ["pink"]},
        {name: "LightPink", hex: "#FFB6C1", rgb: "RGB(255,182,193)", families: ["pink","light"]},
        {name: "HotPink", hex: "#FF69B4", rgb: "RGB(255,105,180)", families: ["pink","hot"]},
        {name: "DeepPink", hex: "#FF1493", rgb: "RGB(255,20,147)", families: ["pink","deep"]},
        {name: "MediumVioletRed", hex: "#C71585", rgb: "RGB(199,21,133)", families: ["pink","purple","violet","medium"]},
        {name: "PaleVioletRed", hex: "#DB7093", rgb: "RGB(219,112,147)", families: ["pink","pale","violet"]}
    ],
    [
        {name: "Cornsilk", hex: "#FFF8DC", rgb: "RGB(255,248,220)", families: ["brown","tan"]},
        {name: "BlanchedAlmond", hex: "#FFEBCD", rgb: "RGB(255,235,205)", families: ["brown","tan"]},
        {name: "Bisque", hex: "#FFE4C4", rgb: "RGB(255,228,196)", families: ["brown","tan"]},
        {name: "NavajoWhite", hex: "#FFDEAD", rgb: "RGB(255,222,173)", families: ["brown","tan"]},
        {name: "Wheat", hex: "#F5DEB3", rgb: "RGB(245,222,179)", families: ["brown","tan"]},
        {name: "BurlyWood", hex: "#DEB887", rgb: "RGB(222,184,135)", families: ["brown","tan"]},
        {name: "Tan", hex: "#D2B48C", rgb: "RGB(210,180,140)", families: ["brown","tan"]},
        {name: "RosyBrown", hex: "#BC8F8F", rgb: "RGB(188,143,143)", families: ["brown","tan"]},
        {name: "SandyBrown", hex: "#F4A460", rgb: "RGB(244,164,96)", families: ["brown","orange"]},
        {name: "GoldenRod", hex: "#DAA520", rgb: "RGB(218,165,32)", families: ["brown","goldenrod","orange"]},
        {name: "DarkGoldenRod", hex: "#B8860B", rgb: "RGB(184,134,11)", families: ["brown","orange","goldenrod","dark"]},
        {name: "Peru", hex: "#CD853F", rgb: "RGB(205,133,63)", families: ["brown","orange"]},
        {name: "Chocolate", hex: "#D2691E", rgb: "RGB(210,105,30)", families: ["brown","orange"]},
        {name: "SaddleBrown", hex: "#8B4513", rgb: "RGB(139,69,19)", families: ["brown"]},
        {name: "Sienna", hex: "#A0522D", rgb: "RGB(160,82,45)", families: ["brown"]},
        {name: "Brown", hex: "#A52A2A", rgb: "RGB(165,42,42)", families: ["brown","red"]},
        {name: "Maroon", hex: "#800000", rgb: "RGB(128,0,0)", families: ["brown","red"]}
    ],
    [
        {name: "White", hex: "#FFFFFF", rgb: "RGB(255,255,255)", families: ["white"]},
        {name: "Snow", hex: "#FFFAFA", rgb: "RGB(255,250,250)", families: ["white"]},
        {name: "HoneyDew", hex: "#F0FFF0", rgb: "RGB(240,255,240)", families: ["white"]},
        {name: "MintCream", hex: "#F5FFFA", rgb: "RGB(245,255,250)", families: ["white"]},
        {name: "Azure", hex: "#F0FFFF", rgb: "RGB(240,255,255)", families: ["white"]},
        {name: "AliceBlue", hex: "#F0F8FF", rgb: "RGB(240,248,255)", families: ["white"]},
        {name: "GhostWhite", hex: "#F8F8FF", rgb: "RGB(248,248,255)", families: ["white"]},
        {name: "WhiteSmoke", hex: "#F5F5F5", rgb: "RGB(245,245,245)", families: ["white"]},
        {name: "SeaShell", hex: "#FFF5EE", rgb: "RGB(255,245,238)", families: ["white","pink"]},
        {name: "Beige", hex: "#F5F5DC", rgb: "RGB(245,245,220)", families: ["white","tan"]},
        {name: "OldLace", hex: "#FDF5E6", rgb: "RGB(253,245,230)", families: ["white","tan"]},
        {name: "FloralWhite", hex: "#FDF5E6", rgb: "RGB(253,245,230)", families: ["white","tan"]},
        {name: "Ivory", hex: "#FFFFF0", rgb: "RGB(255,255,240)", families: ["white","tan"]},
        {name: "AntiqueWhite", hex: "#FAEBD7", rgb: "RGB(250,235,215)", families: ["white","tan"]},
        {name: "Linen", hex: "#FAF0E6", rgb: "RGB(250,240,230)", families: ["white","tan"]},
        {name: "LavenderBlush", hex: "#FFF0F5", rgb: "RGB(255,240,245)", families: ["white","lavender","pink"]},
        {name: "MistyRose", hex: "#FFE4E1", rgb: "RGB(255,228,225)", families: ["white","pink"]}
    ],
    [
        {name: "Gainsboro", hex: "#DCDCDC", rgb: "RGB(220,220,220)", families: ["gray"]},
        {name: "LightGray", hex: "#D3D3D3", rgb: "RGB(211,211,211)", families: ["gray","light"]},
        {name: "Silver", hex: "#C0C0C0", rgb: "RGB(192,192,192)", families: ["gray"]},
        {name: "DarkGray", hex: "#A9A9A9", rgb: "RGB(169,169,169)", families: ["gray","dark"]},
        {name: "Gray", hex: "#808080", rgb: "RGB(128,128,128)", families: ["gray"]},
        {name: "DimGray", hex: "#696969", rgb: "RGB(105,105,105)", families: ["gray"]},
        {name: "LightSlateGray", hex: "#778899", rgb: "RGB(119,136,153)", families: ["gray","light","slate"]},
        {name: "SlateGray", hex: "#708090", rgb: "RGB(112,128,144)", families: ["gray","slate"]},
        {name: "DarkSlateGray", hex: "#2F4F4F", rgb: "RGB(47,79,79)", families: ["gray","slate","dark"]},
        {name: "Black", hex: "#000000", rgb: "RGB(0,0,0)", families: ["black"]}
    ]
];

export default ColourSheet;