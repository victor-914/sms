/**
 * @swagger
 * components:
 *   schemas:
 *     Staff:
 *       type: object
 *       required:
 *         - roleId
 *         - userId
 *         - gender
 *         - schoolId
 *         - dateOfBirth
 *         - department
 *         - staffType
 *       properties:
 *         roleId:
 *           type: string
 *           format: objectId
 *           description: The role ID of the staff member
 *         userId:
 *           type: string
 *           format: objectId
 *           description: The user ID of the staff member
 *         gender:
 *           type: string
 *           enum: [Male, Female]
 *           description: The gender of the staff member
 *         schoolId:
 *           type: string
 *           format: objectId
 *           description: The school ID associated with the staff member
 *         dateOfBirth:
 *           type: string
 *           format: date
 *           description: The date of birth of the staff member
 *         hireDate:
 *           type: string
 *           format: date
 *           description: The hire date of the staff member
 *         department:
 *           type: string
 *           description: The department the staff member belongs to
 *         salary:
 *           type: number
 *           description: The salary of the staff member
 *         staffType:
 *           type: string
 *           enum: [StaffTypeEnum]
 *           description: The type of staff member
 *         onLeave:
 *           type: boolean
 *           description: Indicates if the staff member is currently on leave
 *         leaveDuration:
 *           type: number
 *           description: The duration of the staff member's leave (if applicable)
 *         experience:
 *           type: number
 *           description: The years of experience of the staff member
 *         identityToken:
 *           type: string
 *           description: The identity token of the staff member
 *         benefits:
 *           type: array
 *           items:
 *             type: string
 *           description: An array of benefits provided to the staff member
 * 
 * paths:
 *   /staff:
 *     post:
 *       summary: Create a new staff member
 *       tags: [Staff]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Staff'
 *       responses:
 *         '201':
 *           description: Created
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Staff'
 *         '400':
 *           description: Bad request
 *     get:
 *       summary: Retrieve all staff members
 *       tags: [Staff]
 *       responses:
 *         '200':
 *           description: A list of staff members
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Staff'
 * 
 *   /staff/{id}:
 *     get:
 *       summary: Get a staff member by ID
 *       tags: [Staff]
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: The staff ID
 *       responses:
 *         '200':
 *           description: Staff member found
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Staff'
 *         '404':
 *           description: Staff member not found
 * 
 *     put:
 *       summary: Update a staff member
 *       tags: [Staff]
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: The staff ID
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Staff'
 *       responses:
 *         '200':
 *           description: Staff member updated
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Staff'
 *         '404':
 *           description: Staff member not found
 * 
 *     delete:
 *       summary: Delete a staff member
 *       tags: [Staff]
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: The staff ID
 *       responses:
 *         '204':
 *           description: Staff member deleted
 *         '404':
 *           description: Staff member not found
 */