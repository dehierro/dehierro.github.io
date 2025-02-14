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
                .attr('width', 800)
                .attr('height', 600);

  // Create a volleyball element
  const volleyball = svg.append('circle')
                        .attr('cx', 50)
                        .attr('cy', 300)
                        .attr('r', 70)
                        .attr('fill', 'orange');

  // Append the name element to the volleyball element
  const nameElement = svg.append('text')
                         .attr('x', 50)
                         .attr('y', 300)
                         .attr('text-anchor', 'middle')
                         .attr('dy', '.35em')
                         .attr('font-family', 'Shadows Into Light')
                         .attr('font-size', '24px')
                         .attr('fill', 'white')
                         .text('Daniel Hierro');

  // Animate the volleyball and text
  function animateBall() {
    volleyball.transition()
              .duration(2000)
              .attr('cx', 750)
              .attr('cy', 100)
              .ease(d3.easeLinear)
              .on('end', function() {
                d3.select(this)
                  .attr('cx', 50)
                  .attr('cy', 300)
                  .transition()
                  .duration(2000)
                  .attr('cx', 750)
                  .attr('cy', 100)
                  .ease(d3.easeLinear)
                  .on('end', animateBall);
              });

    nameElement.transition()
               .duration(2000)
               .attr('x', 750)
               .attr('y', 100)
               .ease(d3.easeLinear)
               .on('end', function() {
                 d3.select(this)
                   .attr('x', 50)
                   .attr('y', 300)
                   .transition()
                   .duration(2000)
                   .attr('x', 750)
                   .attr('y', 100)
                   .ease(d3.easeLinear)
                   .on('end', animateBall);
               });
  }

  animateBall();
}
