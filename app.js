document.addEventListener('DOMContentLoaded', function() {
  // Initialize the app
  initApp();
});

function initApp() {
  // Import and use d3.js or three.js for animations
  // Create an animation in the main page that includes volleyball elements
  // Placeholder for animation code

  // Create SVG container
  const svg = d3.select('#app')
                .append('svg')
                .attr('width', window.innerWidth)
                .attr('height', 600);

  // Create a volleyball element
  const volleyball = svg.append('circle')
                        .attr('cx', 0)
                        .attr('cy', 300)
                        .attr('r', 70)
                        .attr('fill', 'url(https://e7.pngegg.com/pngimages/32/680/png-clipart-blue-white-and-yellow-volleyball-volleyball-net-mikasa-sports-volleyball-sport-orange-thumbnail.png)');

  // Append the name element to the volleyball element
  const nameElement = svg.append('text')
                         .attr('x', 0)
                         .attr('y', 300)
                         .attr('text-anchor', 'middle')
                         .attr('dy', '.35em')
                         .attr('font-family', 'Shadows Into Light')
                         .attr('font-size', '24px')
                         .attr('fill', 'white')
                         .text('Daniel Hierro');

  // Function to simulate ball bounce
  function simulateBounce(duration, startX, startY, endX, endY) {
    const bounceHeight = 100;
    const bounceCount = 3;
    const bounceDuration = duration / (bounceCount * 2);

    let bounces = [];
    for (let i = 0; i < bounceCount; i++) {
      bounces.push({ x: startX + (endX - startX) * (i * 2 + 1) / (bounceCount * 2), y: startY - bounceHeight });
      bounces.push({ x: startX + (endX - startX) * (i * 2 + 2) / (bounceCount * 2), y: startY });
    }
    bounces.push({ x: endX, y: endY });

    return bounces;
  }

  // Animate the volleyball and text
  function animateBall() {
    const bounces = simulateBounce(2000, 0, 300, window.innerWidth - 50, 100);

    let ballTransition = volleyball;
    let textTransition = nameElement;
    bounces.forEach((bounce, index) => {
      ballTransition = ballTransition.transition()
                                     .duration(2000 / bounces.length)
                                     .attr('cx', bounce.x)
                                     .attr('cy', bounce.y)
                                     .ease(d3.easeLinear);

      textTransition = textTransition.transition()
                                     .duration(2000 / bounces.length)
                                     .attr('x', bounce.x)
                                     .attr('y', bounce.y)
                                     .ease(d3.easeLinear);
    });

    ballTransition.on('end', function() {
      d3.select(this)
        .attr('cx', 0)
        .attr('cy', 300);
      animateBall();
    });

    textTransition.on('end', function() {
      d3.select(this)
        .attr('x', 0)
        .attr('y', 300);
      animateBall();
    });
  }

  animateBall();
}
