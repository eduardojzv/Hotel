
const types = {
    img: ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'],
    video: ['mp4', 'avi', 'mov', 'mkv', 'flv', 'wmv'],
    // audio: ['mp3', 'wav', 'aac', 'flac', 'ogg'],
    // document: ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt']
};
function getFileType(path: string): string {
    const parts = path.split('.');
    if (parts.length > 1) {
        return parts[parts.length - 1].toLowerCase();
    } else {
        throw new Error('Invalid file path: no extension found.');
    }
}
export function getFileCategory(path: string): string | undefined {
    const fileType = getFileType(path);
    for (const category in types) {
        if (types[category as keyof typeof types].includes(fileType)) {
            return category;
        }
    }
    return 'Invalid file path: no extension found.';
}