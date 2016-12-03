// You can reproduce this figure in plotly.js with the following code!

// Learn more about plotly.js here: https://plot.ly/javascript/getting-started

/* Here's an example minimal HTML template
 *
 * <!DOCTYPE html>
 *   <head>
 *     <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
 *   </head>
 *   <body>
 *   <!-- Plotly chart will be drawn inside this div -->
 *   <div id="plotly-div"></div>
 *     <script>
 *     // JAVASCRIPT CODE GOES HERE
 *     </script>
 *   </body>
 * </html>
 */

var data = [
  {
    x: ["2005", "2012", "2016", "2007", "2013", "2004", "2004", "2002", "2013", "2013", "2007", "2015", "2007", "2004", "2010", "2010", "2004", "2012", "2015", "2006", "2014", "2001", "2011", "2006", "2013", "2006", "2016", "2015", "2003", "2014", "2003", "2015", "2012", "2003", "2003", "2001", "2005", "2011", "2007", "2006", "2005", "2014", "2014", "2005", "2010", "2002", "2012", "2011", "2002", "2015", "2016", "2013", "2013", "2015", "2015", "2016", "2014", "2013", "2014", "2013", "2015", "2014", "2015", "2014", "2010", "2009", "2006", "2012", "1999", "2003", "2015", "1996", "2008", "2000", "2005", "1998", "2014", "2002", "2011", "1997", "2013", "2001", "2016", "2004", "2012", "2011", "2013", "2011", "2011", "2008", "2007", "2015", "2012", "2007", "2010", "2016", "2015", "2013", "2013", "2009", "2007", "2015", "2010", "2014", "2010", "2015", "2008", "2013", "2012", "2014", "2009", "2009", "2008", "2014", "2012", "2011", "2008", "2010", "2013", "2009", "2013", "2012", "2011", "2015", "2013", "2011", "2010", "2014", "2014", "2015", "2011", "2016", "2013", "2011", "2013", "2012", "2015", "2016", "2016", "2015", "2010", "2011", "2012", "2015", "2013", "1990", "2008", "2003", "2001", "2000", "1984", "2003", "1991", "2000", "1987", "1994", "2014", "2012", "1993", "1987", "1999", "2005", "1993", "2006", "1998", "2005", "2008", "1987", "1998", "2010", "1999", "2012", "1989", "2005", "1990", "2008", "1984", "1996", "1989", "2002", "1995", "2014", "1983", "1984", "1996", "2002", "2015", "2000", "1995", "2011", "1993", "2011", "1986", "2002", "1986", "2000", "1992", "2015", "1992", "2005", "2011", "1998", "1993", "1983", "1983", "2007", "1989", "2007", "2011", "1998", "2014", "1990", "2004", "2007", "1995", "1988", "1988", "1990", "1989", "2002", "2013", "1995", "1994", "2013", "1986", "2015", "2007", "2004", "2010", "2013", "1992", "2009", "1985", "1986", "1997", "1985", "2010", "1997", "1983", "1992", "2001", "1991", "2013", "2001", "1991", "2009", "2004", "2004", "2006", "1994", "1988", "2009", "1988", "1987", "2001", "2008", "1999", "1999", "2006", "2003", "2012", "1985", "2006", "2010", "1997", "1994", "2015", "1996", "1997", "1996", "2009", "1985", "1991", "2012", "2003", "2016", "1984", "2002", "1996", "2009", "2001", "2007", "2013", "1997", "1992", "2016", "2000", "2003", "1994", "1995", "2013", "2007", "2001", "2009", "2014", "1993", "1999", "1994", "1991", "1998", "2005", "2003", "2004", "2010", "1991", "1996", "2007", "1997", "2015", "2006", "2002", "2000", "2001", "1995", "2011", "2007", "1999", "1994", "1993", "2008", "2005", "1992", "1993", "2015", "1999", "2010", "2016", "2010", "2013", "2012", "2015", "1991", "2016", "1996", "2004", "2000", "2005", "2015", "2010", "2006", "1995", "1996", "2002", "1998", "2000", "2006", "1998", "1993", "2008", "2009", "2003", "2013", "1997", "1992", "2002", "2012", "2007", "2014", "2008", "1991", "2008", "2004", "2011", "2010", "2014", "2015", "1995", "1994", "2003", "2011", "2001", "1999", "2011", "2012", "2014", "2005", "2004", "1992", "1998", "2006", "1997"], 
    y: ["4", "6", "7", "5", "5", "4", "4", "3", "3", "3", "7", "3", "5", "5", "4", "4", "4", "3", "5", "4", "14", "3", "4", "4", "3", "4", "3", "5", "3", "10", "3", "2", "3", "4", "4", "1", "4", "4", "6", "7", "8", "7", "4", "5", "4", "1", "3", "4", "3", "6", "5", "4", "9", "4", "10", "3", "4", "4", "5", "4", "6", "4", "6", "4", "12", "23", "6", "1", "8", "6", "7", "4", "19", "16", "15", "9", "18", "12", "18", "5", "14", "10", "9", "6", "4", "5", "7", "6", "5", "5", "6", "5", "4", "4", "5", "7", "4", "6", "7", "4", "4", "6", "4", "6", "5", "3", "5", "6", "5", "6", "3", "3", "3", "7", "5", "5", "9", "3", "2", "4", "18", "20", "12", "17", "20", "9", "8", "15", "15", "12", "13", "18", "21", "8", "18", "20", "32", "8", "13", "10", "7", "18", "19", "17", "18", "3", "3", "3", "2", "3", "6", "4", "4", "3", "5", "3", "3", "3", "3", "5", "3", "3", "3", "3", "3", "4", "2", "5", "3", "3", "2", "4", "4", "3", "4", "3", "5", "4", "3", "3", "3", "3", "6", "4", "3", "1", "3", "2", "3", "3", "4", "3", "4", "3", "4", "4", "3", "3", "3", "3", "3", "2", "3", "5", "6", "3", "3", "2", "3", "3", "3", "4", "3", "3", "3", "2", "6", "3", "3", "3", "2", "3", "2", "3", "4", "3", "3", "3", "2", "3", "4", "2", "4", "3", "4", "4", "2", "4", "6", "3", "2", "3", "4", "4", "4", "2", "2", "2", "3", "3", "4", "2", "4", "3", "3", "2", "3", "1", "3", "3", "5", "4", "3", "2", "4", "3", "4", "3", "4", "4", "2", "3", "4", "3", "3", "3", "5", "3", "4", "6", "4", "4", "6", "6", "3", "7", "4", "7", "4", "3", "4", "6", "4", "5", "6", "3", "3", "5", "3", "4", "4", "4", "5", "8", "4", "3", "5", "4", "6", "4", "3", "4", "2", "3", "7", "4", "4", "4", "5", "4", "4", "3", "4", "9", "4", "4", "6", "7", "10", "5", "8", "4", "6", "3", "4", "3", "4", "7", "6", "4", "4", "3", "5", "3", "4", "5", "6", "4", "4", "5", "5", "5", "5", "4", "4", "6", "4", "6", "4", "4", "5", "4", "6", "6", "6", "6", "3", "2", "4", "6", "4", "4", "6", "6", "6", "3", "4", "4", "4", "4", "4"], 
    name: "Article Count", 
    text: ["TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TOIT", "TEAC", "TEAC", "TEAC", "TEAC", "TEAC", "TEAC", "TEAC", "TEAC", "TEAC", "TEAC", "TEAC", "TEAC", "TEAC", "TEAC", "TEAC", "JEA", "JEA", "JEA", "JEA", "JEA", "JEA", "JEA", "JEA", "JEA", "JEA", "JEA", "JEA", "JEA", "JEA", "JEA", "JEA", "JEA", "JEA", "JEA", "JEA", "TWEB", "TWEB", "TWEB", "TWEB", "TWEB", "TWEB", "TWEB", "TWEB", "TWEB", "TWEB", "TWEB", "TWEB", "TWEB", "TWEB", "TWEB", "TWEB", "TWEB", "TWEB", "TWEB", "TWEB", "TWEB", "TWEB", "TWEB", "TWEB", "TWEB", "TWEB", "TWEB", "TWEB", "TWEB", "TWEB", "TWEB", "TWEB", "TWEB", "TWEB", "TWEB", "TWEB", "TIST", "TIST", "TIST", "TIST", "TIST", "TIST", "TIST", "TIST", "TIST", "TIST", "TIST", "TIST", "TIST", "TIST", "TIST", "TIST", "TIST", "TIST", "TIST", "TIST", "TIST", "TIST", "TIST", "TIST", "TIST", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOCS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS", "TOMACS"], 
    textsrc: "harshavamsi:10:ef6f3e", 
    type: "bar", 
    uid: "66ae25", 
    xsrc: "harshavamsi:10:5ea8bb", 
    ysrc: "harshavamsi:10:9aa193"
  }
];
var layout = {
  autosize: true, 
  hovermode: "closest", 
  legend: {
    x: 0.5, 
    y: -0.2, 
    orientation: "h", 
    traceorder: "normal", 
    xanchor: "center"
  }, 
  showlegend: true, 
  title: "Article count vs Year", 
  xaxis: {
    autorange: true, 
    fixedrange: false, 
    range: [1982.5, 2016.5], 
    title: "Year", 
    type: "linear"
  }, 
  yaxis: {
    autorange: true, 
    range: [0, 33.6842105263], 
    title: "Article Count", 
    type: "linear"
  }
};
Plotly.plot('plotly-div', data, layout);