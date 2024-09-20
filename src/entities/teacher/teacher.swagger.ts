// src/routes/teacher.routes.ts

/**
 * @swagger
 * components:
 *   schemas:
 *     Teacher:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - school
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the teacher
 *         name:
 *           type: string
 *           description: The name of the teacher
 *         email:
 *           type: string
 *           description: The email of the teacher
 *         school:
 *           type: string
 *           description: The ID of the school the teacher belongs to
 *       example:
 *         name: John Doe
 *         email: john.doe@example.com
 *         school: 611d1f9a5990b4b43f34bcba
 */

/**
 * @swagger
 * /api/teachers:
 *   post:
 *     summary: Create a new teacher
 *     tags: [Teacher]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Teacher'
 *     responses:
 *       201:
 *         description: The teacher was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Teacher'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /api/teachers:
 *   get:
 *     summary: Get all teachers
 *     tags: [Teacher]
 *     responses:
 *       200:
 *         description: List of all teachers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Teacher'
 */

/**
 * @swagger
 * /api/teachers/{id}:
 *   get:
 *     summary: Get a teacher by ID
 *     tags: [Teacher]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The teacher ID
 *     responses:
 *       200:
 *         description: The teacher description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Teacher'
 *       404:
 *         description: The teacher was not found
 */
/**
 * @swagger
 * /api/teachers/{id}:
 *   put:
 *     summary: Update a teacher by ID
 *     tags: [Teacher]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The teacher ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Teacher'
 *     responses:
 *       200:
 *         description: The updated teacher data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Teacher'
 *       404:
 *         description: The teacher was not found
 *       500:
 *         description: Some error happened
 */

/**
 * @swagger
 * /api/teachers/{id}:
 *   delete:
 *     summary: Remove a teacher by ID
 *     tags: [Teacher]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The teacher ID
 *     responses:
 *       204:
 *         description: The teacher was deleted successfully
 *       404:
 *         description: The teacher was not found
 */
