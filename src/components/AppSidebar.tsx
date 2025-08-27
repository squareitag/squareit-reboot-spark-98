import { useState } from "react";
import { 
  Home, 
  Building2, 
  Wrench, 
  Monitor, 
  Phone, 
  Mail,
  ChevronDown,
  ChevronRight,
  Cloud,
  Shield,
  Users,
  Settings,
  Server,
  Database,
  Workflow,
  Laptop,
  HardDrive,
  Network,
  FileText,
  Target,
  Lightbulb,
  Headphones
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const { t } = useLanguage();
  const currentPath = location.pathname;

  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    services: true,
    technologies: false,
  });

  const collapsed = state === 'collapsed';
  
  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-primary text-primary-foreground font-medium" : "hover:bg-muted/80";

  const toggleGroup = (groupKey: string) => {
    setExpandedGroups(prev => ({
      ...prev,
      [groupKey]: !prev[groupKey]
    }));
  };

  const mainItems = [
    { title: t('nav.home'), url: "/", icon: Home },
    { title: t('nav.about'), url: "/about", icon: Building2 },
    { title: t('nav.contact'), url: "/contact", icon: Mail },
    { title: t('nav.careers'), url: "/careers", icon: Users },
  ];

  const serviceGroups = [
    {
      title: t('nav.managed_services'),
      items: [
        { title: t('nav.managed_infrastructure'), url: "/services/managed-infrastructure", icon: Server },
        { title: t('nav.managed_workplace'), url: "/services/managed-workplace", icon: Laptop },
        { title: t('nav.managed_servers'), url: "/services/managed-servers", icon: Database },
        { title: t('nav.managed_network'), url: "/services/managed-network", icon: Network },
        { title: t('nav.managed_backup'), url: "/services/managed-backup", icon: HardDrive },
      ]
    },
    {
      title: t('nav.migration'),
      items: [
        { title: t('nav.m365_migration'), url: "/services/m365-migration", icon: Cloud },
        { title: t('nav.azure_migration'), url: "/services/azure-migration", icon: Cloud },
        { title: t('nav.sharepoint_teams_migration'), url: "/services/sharepoint-teams-migration", icon: Users },
      ]
    },
    {
      title: t('nav.consulting'),
      items: [
        { title: t('nav.modern_workplace'), url: "/services/modern-workplace", icon: Laptop },
        { title: t('nav.cloud_security'), url: "/services/cloud-security", icon: Shield },
        { title: t('nav.collaboration'), url: "/services/collaboration", icon: Users },
        { title: t('nav.teams_telephone'), url: "/services/teams-telephone", icon: Phone },
        { title: t('nav.workshop'), url: "/services/workshop", icon: Target },
      ]
    }
  ];

  const technologyItems = [
    { title: "Microsoft 365", url: "/technologies/microsoft-365", icon: Cloud },
    { title: "Microsoft Azure", url: "/technologies/microsoft-azure", icon: Cloud },
    { title: "AvePoint Backup", url: "/technologies/avepoint-backup", icon: HardDrive },
    { title: "Cato Networks", url: "/technologies/cato-networks", icon: Network },
    { title: "Printix", url: "/technologies/printix", icon: FileText },
    { title: "Peoplefone", url: "/technologies/peoplefone", icon: Phone },
    { title: "Keeper", url: "/technologies/keeper", icon: Shield },
  ];

  // Calculate expanded states
  const isServicesExpanded = expandedGroups.services || serviceGroups.some(group => 
    group.items.some(item => isActive(item.url))
  );

  const isTechnologiesExpanded = expandedGroups.technologies || technologyItems.some(item => isActive(item.url));

  return (
    <Sidebar className={collapsed ? "w-16" : "w-80"} collapsible="icon">
      <SidebarContent className="pt-4">
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className={`h-5 w-5 ${collapsed ? 'mx-auto' : 'mr-3'}`} />
                      {!collapsed && <span className="text-sm font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Services Section */}
        <SidebarGroup>
          <SidebarGroupLabel 
            className={`cursor-pointer flex items-center justify-between hover:bg-muted/50 rounded-md px-2 py-1 ${collapsed ? 'px-1' : ''}`}
            onClick={() => toggleGroup('services')}
          >
            <div className="flex items-center">
              <Wrench className={`h-4 w-4 ${collapsed ? 'mx-auto' : 'mr-2'}`} />
              {!collapsed && <span>{t('nav.services')}</span>}
            </div>
            {!collapsed && (
              isServicesExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />
            )}
          </SidebarGroupLabel>

          {(isServicesExpanded || collapsed) && (
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <NavLink to="/services" className={getNavCls}>
                      <Wrench className={`h-4 w-4 ${collapsed ? 'mx-auto' : 'mr-3'}`} />
                      {!collapsed && <span className="text-sm">{t('nav.all_services')}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                {!collapsed && serviceGroups.map((group, groupIndex) => (
                  <SidebarMenuItem key={group.title}>
                    <div className="pl-4 mt-2">
                      <div className="text-xs font-semibold text-muted-foreground mb-1 px-2">
                        {group.title}
                      </div>
                      <SidebarMenuSub>
                        {group.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton asChild>
                              <NavLink to={item.url} className={getNavCls}>
                                <item.icon className="h-4 w-4 mr-2" />
                                <span className="text-xs">{item.title}</span>
                              </NavLink>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </div>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          )}
        </SidebarGroup>

        {/* Technologies Section */}
        <SidebarGroup>
          <SidebarGroupLabel 
            className={`cursor-pointer flex items-center justify-between hover:bg-muted/50 rounded-md px-2 py-1 ${collapsed ? 'px-1' : ''}`}
            onClick={() => toggleGroup('technologies')}
          >
            <div className="flex items-center">
              <Monitor className={`h-4 w-4 ${collapsed ? 'mx-auto' : 'mr-2'}`} />
              {!collapsed && <span>{t('nav.technologies')}</span>}
            </div>
            {!collapsed && (
              isTechnologiesExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />
            )}
          </SidebarGroupLabel>

          {(isTechnologiesExpanded || collapsed) && (
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <NavLink to="/technologies" className={getNavCls}>
                      <Monitor className={`h-4 w-4 ${collapsed ? 'mx-auto' : 'mr-3'}`} />
                      {!collapsed && <span className="text-sm">{t('nav.all_technologies')}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                {!collapsed && technologyItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink to={item.url} className={`${getNavCls} pl-8`}>
                        <item.icon className="h-4 w-4 mr-2" />
                        <span className="text-xs">{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          )}
        </SidebarGroup>

        {/* Support */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/services/support" className={getNavCls}>
                    <Headphones className={`h-5 w-5 ${collapsed ? 'mx-auto' : 'mr-3'}`} />
                    {!collapsed && <span className="text-sm font-medium">{t('nav.support')}</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}