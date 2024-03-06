import styled from 'styled-components';

const StyledUsers = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 500px;
	height: 60px;
	padding: 8px;
	background-color: white;
	border-radius: 0.75rem;
	margin: 1rem auto;
	box-shadow: rgba(17 13 13 / 20%) 0px 0px 10px;
	color: black;
`;

const StyledImage = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	margin-right: 16px;
`;
const StyledContainer = styled.div`
	margin-right: auto;
`;
const StyledName = styled.h2`
	font-size: 1rem;
	margin: 0.25rem 0px;
`;

const StyledUsername = styled.p`
	font-size: 0.75rem;
`;

const StyledActive = styled.span`
	color: ${({ $color }) => $color};
	padding-right: 20px;
`;
export {
	StyledActive,
	StyledUsers,
	StyledImage,
	StyledContainer,
	StyledName,
	StyledUsername
};
