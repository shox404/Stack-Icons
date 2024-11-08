export const download = (name:string) => {
    const link = document.createElement('a');
    link.href = `/icons/${name}.svg`;
    link.download = `${name}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}