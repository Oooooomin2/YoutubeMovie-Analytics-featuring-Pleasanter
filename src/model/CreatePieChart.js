export class CreatePieChart {
    constructor(width, height, radius) {
        this.width = width;
        this.height = height;
        this.radius = radius;
    }

    Create(dataset, target) {
        let svg = d3.select(target)
            .append('svg')
            .attr('width', this.width)
            .attr('height', this.height);
        const g = svg.append('g')
            .attr('transform', `translate(${this.width / 2}, ${this.height / 2})`);
        let color = d3.scaleOrdinal()
            .range(['#66FF99', '#FF3399']);

        let pie = d3.pie()
            .value(d => d)
            .sort(null);

        let pieGroup = g.selectAll('.pie')
            .data(pie(dataset))
            .enter()
            .append('g')
            .attr('class', 'pie');

        let arc = d3.arc()
            .outerRadius(this.radius)
            .innerRadius(0);

        pieGroup.append('path')
            .attr('d', arc)
            .attr('fill', d => color(d.index))
            .attr('opacity', 0.75)
            .attr('stroke', 'white');
    }
}