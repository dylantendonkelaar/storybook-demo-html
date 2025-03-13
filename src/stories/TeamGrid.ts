import './teamgrid.css';

export interface TeamGridProps {
	costInHours: number,
  title: string;
  teamMembers: Array<{
    employeeImage: string;
    title: string;
    employeeFunction: string;
    showInOverview: boolean;
  }>;
  darkMode: boolean;
  isCompact: boolean;
}

export const createTeamGrid = ({ costInHours, title, teamMembers, isCompact, darkMode }: TeamGridProps) => {
	const teamGrid = document.createElement('section');
	teamGrid.className = `section section--team-slider ${isCompact ? 'section--compact-team-slider' : ''} ${darkMode ? 'section--black' : ''}`;
	teamGrid.setAttribute('aria-label', 'Team section');
  
	const filteredTeamMembers = teamMembers.filter(member => member.showInOverview);
  
	teamGrid.innerHTML = `
	  <div class="container">
		<div class="row">
		  <div class="col">
			<h2>${title}</h2>
		  </div>
		</div>
	  </div>
	  <div class="container">
		<div class="team-slider">
		  ${filteredTeamMembers.map((slide, index) => `
			<div class="team-slider__card" key="${index}">
			  <div class="card">
				<div class="card__img">
				  <img src="${slide.employeeImage}" width="600" height="600" alt="${slide.title}" />
				</div>
			  </div>
			  <div class="team-slider__info">
				<span>${slide.title}</span>
				<p>${slide.employeeFunction}</p>
			  </div>
			</div>
		  `).join('')}
		</div>
	  </div>
	`;
  

  return teamGrid;
};