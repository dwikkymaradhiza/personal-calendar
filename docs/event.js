/**
 * @swagger
 * /events:
 *   get:
 *     summary: Get Events
 *     tags:
 *      - Event
 *     produces:
 *        application/json
 *     parameters:
 *        - in: header
 *          name: Authorization
 *          default: Bearer TOKEN
 *          description: An authorization header (Bearer JWT)
 *          required: true
 *     responses:
 *       200:
 *         description: success
 *       401:
 *         description: unauthorized
 *       500:
 *         description: internal server error
 *   post:
 *     summary: Create Event
 *     tags:
 *      - Event
 *     produces:
 *        application/json
 *     parameters:
 *        - in: header
 *          name: Authorization
 *          default: Bearer TOKEN
 *          description: An authorization header (Bearer JWT)
 *          required: true
 *        - in: body
 *          name: body
 *          description: Parameter that needs to be added to the api
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              users_in_the_event:
 *                type: array
 *              start_datetime:
 *                type: date
 *              end_datetime:
 *                type: date
 *              location:
 *                type: array
 *            example:
 *              name: Birthday Party
 *              users_in_the_event: ["123123123"]
 *              start_datetime: 2019-05-04 08:00:00
 *              end_datetime: 2019-05-04 12:00:00
 *              location: [108.212121, 6.7212121]
 *     responses:
 *       200:
 *         description: success
 *       401:
 *         description: unauthorized
 *       500:
 *         description: internal server error
 *
 * /events/{id}:
 *   get:
 *     summary: Detail Event
 *     tags:
 *      - Event
 *     produces:
 *        application/json
 *     parameters:
 *        - in: header
 *          name: Authorization
 *          default: Bearer TOKEN
 *          description: An authorization header (Bearer JWT)
 *          required: true
 *        - in: path
 *          name: id
 *          description: Event Id
 *     responses:
 *       200:
 *         description: success
 *       401:
 *         description: unauthorized
 *       500:
 *         description: internal server error
 *   put:
 *     summary: Update Event
 *     tags:
 *      - Event
 *     produces:
 *        application/json
 *     parameters:
 *        - in: header
 *          name: Authorization
 *          default: Bearer TOKEN
 *          description: An authorization header (Bearer JWT)
 *          required: true
 *        - in: path
 *          name: id
 *          description: Event Id
 *        - in: body
 *          name: body
 *          description: Parameter that needs to be added to the api
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              users_in_the_event:
 *                type: array
 *              start_datetime:
 *                type: date
 *              end_datetime:
 *                type: date
 *              location:
 *                type: array
 *            example:
 *              name: Birthday Party
 *              users_in_the_event: ["123123123"]
 *              start_datetime: 2019-05-04 08:00:00
 *              end_datetime: 2019-05-04 12:00:00
 *              location: [108.212121, 6.7212121]
 *     responses:
 *       200:
 *         description: success
 *       401:
 *         description: unauthorized
 *       500:
 *         description: internal server error
 *   delete:
 *     summary: Delete Event
 *     tags:
 *      - Event
 *     produces:
 *        application/json
 *     parameters:
 *        - in: header
 *          name: Authorization
 *          default: Bearer TOKEN
 *          description: An authorization header (Bearer JWT)
 *          required: true
 *        - in: path
 *          name: id
 *          description: Event Id
 *     responses:
 *       200:
 *         description: success
 *       401:
 *         description: unauthorized
 *       500:
 *         description: internal server error
 */
