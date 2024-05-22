import { promises as fs } from 'node:fs';

export const checkIsDirectory = async (filePath: string): Promise<boolean> => {
    try {
        const stats = await fs.lstat(filePath);
        return stats.isDirectory();
    } catch (error: any) {
        if (error.code === 'ENOENT') {
            // 文件或目录不存在
            return false;
        }
        throw error;
    }
};

export const createDirectory = async (directoryPath: string): Promise<void> => {
    try {
        await fs.mkdir(directoryPath, { recursive: true });
    } catch (error) {
        throw error;
    }
};

export const writeToFile = async (
    filePath: string,
    data: any
): Promise<void> => {
    try {
        await fs.writeFile(filePath, data);
    } catch (error) {
        throw error;
    }
};
