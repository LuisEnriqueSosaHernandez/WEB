var morris1 = new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'myfirstchart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
      { year: '2008', value: 20, value2: 30 },
      { year: '2009', value: 10, value2: 40 },
      { year: '2010', value: 5, value2: 10 },
      { year: '2011', value: 5, value2: 20 },
      { year: '2012', value: 20, value2: 60 }
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value','value2'],
    lineWidth: 1,
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Coca-cola','Pepsi'],
    resize: true,
    lineColors:['#C14D9F', '#2CB4AC']
  });

  Morris.Area({
    element: 'mysecondchart',
    data: [
      { y: '2006', a: 100, b: 90 },
      { y: '2007', a: 75,  b: 65 },
      { y: '2008', a: 50,  b: 40 },
      { y: '2009', a: 75,  b: 65 },
      { y: '2010', a: 50,  b: 40 },
      { y: '2011', a: 75,  b: 65 },
      { y: '2012', a: 100, b: 90 }
    ],
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Series A', 'Series B'],
    resize: true,
    lineColors:['#C14D9F', '#2CB4AC'],
    lineWidth: 1,
  });

  $("#botData").on("click",function(){
    console.log(morris1);

    var nuevaData= [
      { year: '2012', value: 11, value2: 15 },
      { year: '2013', value: 20, value2: 30 },
      { year: '2014', value: 12, value2: 16 },
      { year: '2015', value: 14, value2: 35 },
      { year: '2016', value: 3, value2: 8 },
      { year: '2017', value: 45, value2: 12 }
    ];
    morris1.setData(nuevaData);
  })