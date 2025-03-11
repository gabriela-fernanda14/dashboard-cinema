import styles from './sidebar.module.css';

const Sidebar = () => {
    return (
        <section class={styles.sidebar}>
        <div class={styles.sidebarHeader}>
          <h2>Menu</h2>
        </div>
        <div class={styles.sidebarMenu}>
          <ul>
            <li><a href="#" class={styles.active}>Visão Geral</a></li>
            <li><a href="#">Vendas</a></li>
            <li><a href="#">Ocupação</a></li>
            <li><a href="#">Bomboniere</a></li>
            <li><a href="#">Funcionários</a></li>
          </ul>
        </div>
      </section>
    );
};

export default Sidebar;