export abstract class Mapper<M, E> {
    abstract fromMap(data: M): E;
    abstract toMap(data: E): M;
}
