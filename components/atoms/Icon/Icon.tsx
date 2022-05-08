export const Icon = ({ icon }: { icon: string }) => {
	return (
		<svg height="24" width="24" viewBox="0 0 24 24">
			<use href={`/sprite.svg#ico-${icon.toLocaleLowerCase()}`} />
		</svg>
	);
};
