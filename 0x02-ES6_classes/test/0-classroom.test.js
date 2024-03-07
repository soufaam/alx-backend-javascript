import ClassRoom from '../0-classroom.js';

describe('ClassRoom', () => {
    it('should initialize with the correct maxStudentsSize attribute', () => {
        const maxStudentsSize = 30;
        const classroom = new ClassRoom(maxStudentsSize);
        expect(classroom._maxStudentsSize).toBe(maxStudentsSize);
    });

    it('should correctly handle negative maxStudentsSize', () => {
        const maxStudentsSize = -10;
        const classroom = new ClassRoom(maxStudentsSize);
        expect(classroom._maxStudentsSize).toBe(maxStudentsSize);
    });

    it('should correctly handle maxStudentsSize of 0', () => {
        const maxStudentsSize = 0;
        const classroom = new ClassRoom(maxStudentsSize);
        expect(classroom._maxStudentsSize).toBe(maxStudentsSize);
    });

    it('should correctly handle non-integer maxStudentsSize', () => {
        const maxStudentsSize = 15.5;
        const classroom = new ClassRoom(maxStudentsSize);
        expect(classroom._maxStudentsSize).toBe(maxStudentsSize);
    });
});